import { Directive, Input, OnChanges, OnInit, EventEmitter } from '@angular/core';
import { GoogleMapsAPIWrapper } from '@agm/core';

declare var google: any;
@Directive({
  selector: 'agm-direction'
})
export class AgmDirection implements OnChanges, OnInit {

  @Input() origin: { lat: Number, lng: Number };
  @Input() destination: { lat: Number, lng: Number };
  @Input() waypoints: Object = [];
  @Input() travelMode: String = 'DRIVING';
  @Input() optimizeWaypoints: Boolean = true;

  public directionsService = new google.maps.DirectionsService;
  public directionsDisplay: any = undefined;

  constructor(
    private gmapsApi: GoogleMapsAPIWrapper
  ) { }

  ngOnInit() {
    this.directionDraw();
  }

  ngOnChanges() {
    this.directionDraw();
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

