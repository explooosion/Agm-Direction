import { Directive, Input, OnChanges, OnInit, EventEmitter } from '@angular/core';
import { GoogleMapsAPIWrapper } from '@agm/core';

declare var google: any;
@Directive({
  selector: 'agm-direction'
})
export class AgmDirection implements OnChanges, OnInit {

  @Input() origin: { lat: Number, lng: Number };
  @Input() destination: { lat: Number, lng: Number };
  @Input() waypoints: object = [];
  @Input() travelMode: string = 'DRIVING';
  @Input() optimizeWaypoints: boolean = true;
  @Input() visible: boolean = true;
  @Input() panel: object | undefined;

  public directionsService = new google.maps.DirectionsService;
  public directionsDisplay: any = undefined;

  constructor(
    private gmapsApi: GoogleMapsAPIWrapper
  ) { }

  ngOnInit() {
    this.directionDraw();
  }

  ngOnChanges() {

    /**
     * When visible is false then remove the direction layer
     */
    if (!this.visible) {
      this.directionsDisplay.setPanel(null);
      this.directionsDisplay.setMap(null);
      this.directionsDisplay = undefined;
    } else {
      this.directionDraw();
    }

  }

  /**
   * This event is fired when the user creating or updating this direction
   */
  private directionDraw() {

    this.gmapsApi.getNativeMap().then(map => {

      if (typeof this.directionsDisplay === 'undefined') {
        this.directionsDisplay = new google.maps.DirectionsRenderer;
        this.directionsDisplay.setMap(map);
      }

      if (typeof this.panel === 'undefined') {
        this.directionsDisplay.setPanel(null);
      } else {
        this.directionsDisplay.setPanel(this.panel);
      }

      this.directionsService.route({
        origin: this.origin,
        destination: this.destination,
        waypoints: this.waypoints,
        optimizeWaypoints: this.optimizeWaypoints,
        travelMode: this.travelMode
      }, (response: any, status: any) => {
        if (status === 'OK') {
          this.directionsDisplay.setDirections(response);
        }
      });

    });

  }

}

