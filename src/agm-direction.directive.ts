import { Directive, Input, OnChanges, OnInit, EventEmitter, ElementRef } from '@angular/core';
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

  public directionsService: any = undefined;
  public directionsDisplay: any = undefined;

  constructor(
    private gmapsApi: GoogleMapsAPIWrapper
  ) { }

  ngOnInit() {
    this.directionDraw();
  }

  ngOnChanges(obj: any) {

    /**
     * When visible is false then remove the direction layer
     */
    if (!this.visible) {
      this.directionsDisplay.setPanel(null);
      this.directionsDisplay.setMap(null);
      this.directionsDisplay = undefined;
    } else {
      /**
       * When renderOptions are not first change then reset the display
       */
      if (obj.renderOptions) {
        if (obj.renderOptions.firstChange === false) {
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
        }
      });

    });

  }

}


