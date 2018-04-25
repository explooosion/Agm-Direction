import { Directive, Input, Output, OnChanges, OnInit, EventEmitter, ElementRef } from '@angular/core';
import { GoogleMapsAPIWrapper } from '@agm/core';

declare var google: any;
@Directive({
  selector: 'agm-direction'
})
export class AgmDirection implements OnChanges, OnInit {

  @Input() origin: { lat: Number, lng: Number };
  @Input() destination: { lat: Number, lng: Number };
  @Input() travelMode: string = 'DRIVING';
  @Input() transitOptions: any = undefined;
  @Input() drivingOptions: any = undefined;
  @Input() waypoints: object = [];
  @Input() optimizeWaypoints: boolean = true;
  @Input() provideRouteAlternatives: boolean = false;
  @Input() avoidHighways: boolean = false;
  @Input() avoidTolls: boolean = false;
  @Input() renderOptions: any;
  @Input() visible: boolean = true;
  @Input() panel: object | undefined;
  @Input() markerOptions: { origin: any, destination: any };

  @Output() onChange: EventEmitter<any> = new EventEmitter<any>();

  public directionsService: any = undefined;
  public directionsDisplay: any = undefined;

  private isFirstChange: boolean = true;

  private originMarker = undefined;
  private destinationMarker = undefined;

  constructor(
    private gmapsApi: GoogleMapsAPIWrapper,
  ) { }

  ngOnInit() {
    this.directionDraw();
  }

  ngOnChanges(obj: any) {
    /**
     * When visible is false then remove the direction layer
     */
    if (!this.visible) {
      try {
        if (typeof this.originMarker !== 'undefined') {
          this.originMarker.setMap(null);
          this.destinationMarker.setMap(null);
        }
        this.directionsDisplay.setPanel(null);
        this.directionsDisplay.setMap(null);
        this.directionsDisplay = undefined;
      } catch (e) { }
    } else {

      if (this.isFirstChange) {
        this.isFirstChange = false;
        return;
      }

      /**
       * When renderOptions are not first change then reset the display
       */
      if (typeof obj.renderOptions !== 'undefined') {
        if (obj.renderOptions.firstChange === false) {
          if (typeof this.originMarker !== 'undefined') {
            this.originMarker.setMap(null);
            this.destinationMarker.setMap(null);
          }
          this.directionsDisplay.setPanel(null);
          this.directionsDisplay.setMap(null);
          this.directionsDisplay = undefined;
        }
      }
      this.directionDraw();
    }

  }

  /**
   * This event is fired when the user creating or updating this direction
   */
  private directionDraw() {

    this.gmapsApi.getNativeMap().then(map => {

      if (typeof this.directionsDisplay === 'undefined') {
        this.directionsDisplay = new google.maps.DirectionsRenderer(this.renderOptions);
        this.directionsDisplay.setMap(map);
      }

      if (typeof this.directionsService === 'undefined') {
        this.directionsService = new google.maps.DirectionsService;
      }

      if (typeof this.panel === 'undefined') {
        this.directionsDisplay.setPanel(null);
      } else {
        this.directionsDisplay.setPanel(this.panel);
      }

      this.directionsService.route({
        origin: this.origin,
        destination: this.destination,
        travelMode: this.travelMode,
        transitOptions: this.transitOptions,
        drivingOptions: this.drivingOptions,
        waypoints: this.waypoints,
        optimizeWaypoints: this.optimizeWaypoints,
        provideRouteAlternatives: this.provideRouteAlternatives,
        avoidHighways: this.avoidHighways,
        avoidTolls: this.avoidTolls,
      }, (response: any, status: any) => {
        if (status === 'OK') {
          this.directionsDisplay.setDirections(response);
          /**
           * Emit The DirectionsResult Object
           * https://developers.google.com/maps/documentation/javascript/directions?hl=en#DirectionsResults
           */

          // Custom Markers 

          if (typeof this.markerOptions !== 'undefined') {
            try {
              if (typeof this.originMarker !== 'undefined') {
                google.maps.event.clearListeners(this.originMarker, 'click');
                this.originMarker.setMap(null);
              }
              if (typeof this.destinationMarker !== 'undefined') {
                google.maps.event.clearListeners(this.destinationMarker, 'click');
                this.destinationMarker.setMap(null);
              }
            } catch (err) {
              console.error('Can not reset custom marker.', err);
            }

            var _route = response.routes[0].legs[0];
            // Origin Marker
            try {
              this.markerOptions.origin.map = map;
              this.markerOptions.origin.position = _route.start_location;
              this.originMarker = this.setMarker(map, this.originMarker, this.markerOptions.origin, _route.start_address);
              // Destination Marker
              this.markerOptions.destination.map = map;
              this.markerOptions.destination.position = _route.end_location;
              this.destinationMarker = this.setMarker(map, this.destinationMarker, this.markerOptions.destination, _route.end_address);
            } catch (err) {
              console.error('MarkerOptions error.', err)
            }

          }
          this.onChange.emit(response);
        }
      });
    });
  }

  /**
   * Custom Origin and Destination Icon
   * 
   * @private
   * @param {any} map map
   * @param {any} marker marker
   * @param {any} markerOpts properties
   * @param {string} content marker's infowindow content
   * @returns {any} marker
   * @memberof AgmDirection
   */
  private setMarker(map: any, marker: any, markerOpts: any, content: string) {
    const infowindow = new google.maps.InfoWindow({
      content: content,
    });
    marker = new google.maps.Marker(markerOpts);
    marker.addListener('click', () => {
      infowindow.open(map, marker);
    });
    return marker;
  }
}


