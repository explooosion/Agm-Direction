import { Directive, Input, Output, OnChanges, OnInit, EventEmitter } from '@angular/core';
import { GoogleMapsAPIWrapper } from '@agm/core';
import { InfoWindow, Marker, GoogleMap } from '@agm/core/services/google-maps-types';

declare var google: any;
@Directive({
  selector: 'agm-direction'
})
export class AgmDirection implements OnChanges, OnInit {

  /**
   * LatLng | String | google.maps.Place
   */
  @Input() origin: any;

  /**
   * LatLng | String | google.maps.Place
   */
  @Input() destination: any;

  @Input() travelMode: String = 'DRIVING';
  @Input() transitOptions: any = undefined;
  @Input() drivingOptions: any = undefined;
  @Input() waypoints: object = [];
  @Input() optimizeWaypoints: Boolean = true;
  @Input() provideRouteAlternatives: Boolean = false;
  @Input() avoidHighways: Boolean = false;
  @Input() avoidTolls: Boolean = false;
  @Input() renderOptions: any;
  @Input() visible: Boolean = true;
  @Input() panel: object | undefined;
  @Input() markerOptions: { origin: any, destination: any };
  @Input() infoWindow: InfoWindow;

  @Output() onChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() sendInfoWindow: EventEmitter<InfoWindow> = new EventEmitter<InfoWindow>();

  public directionsService: any = undefined;
  public directionsDisplay: any = undefined;

  private isFirstChange: Boolean = true;

  private originMarker: any;
  private destinationMarker: any;

  constructor(
    private gmapsApi: GoogleMapsAPIWrapper,
  ) { }

  ngOnInit() {
    if (this.visible === true) {
      this.directionDraw();
    }
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
        /**
         * When visible is false at the first time
         */
        if (typeof this.directionsDisplay === 'undefined') {
          this.directionDraw();
        }
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

    this.gmapsApi.getNativeMap().then((map: GoogleMap) => {

      if (typeof this.directionsDisplay === 'undefined') {
        this.directionsDisplay = new google.maps.DirectionsRenderer(this.renderOptions);
        this.directionsDisplay.setMap(map);
        this.directionsDisplay.addListener('directions_changed', () => {
          // #18 - listener for dragable routes
          this.onChange.emit(this.directionsDisplay.getDirections());
        });
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

            const _route = response.routes[0].legs[0];
            try {
              // Origin Marker
              if (typeof this.markerOptions.origin !== 'undefined') {
                this.markerOptions.origin.map = map;
                this.markerOptions.origin.position = _route.start_location;
                this.originMarker = this.setMarker(
                  map,
                  this.originMarker,
                  this.markerOptions.origin,
                  _route.start_address
                );
              }
              // Destination Marker
              if (typeof this.markerOptions.destination !== 'undefined') {
                this.markerOptions.destination.map = map;
                this.markerOptions.destination.position = _route.end_location;
                this.destinationMarker = this.setMarker(
                  map,
                  this.destinationMarker,
                  this.markerOptions.destination,
                  _route.end_address
                );
              }
            } catch (err) {
              console.error('MarkerOptions error.', err);
            }
          }

        }
      });
    });
  }

  /**
   * Custom Origin and Destination Icon
   * @param map map
   * @param marker marker
   * @param markerOpts properties
   * @param content marker's infowindow content
   * @returns new marker
   * @memberof AgmDirection
   */
  private setMarker(map: GoogleMap, marker: any, markerOpts: any, content: string) {
    if (typeof this.infoWindow === 'undefined') {
      // #27 - infowindow
      this.infoWindow = new google.maps.InfoWindow({});
      this.sendInfoWindow.emit(this.infoWindow);
    }
    marker = new google.maps.Marker(markerOpts);
    marker.addListener('click', () => {
      const infowindoContent: string = typeof markerOpts.infoWindow === 'undefined' ? content : markerOpts.infoWindow;
      this.infoWindow.setContent(infowindoContent);
      this.infoWindow.open(map, marker);
    });
    return marker;
  }
}
