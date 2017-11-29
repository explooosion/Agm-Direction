import { Directive, Input, Output, OnChanges, OnInit, EventEmitter, SimpleChange } from '@angular/core';
import { GoogleMapsAPIWrapper } from '@agm/core';

declare var google: any;
@Directive({
  selector: 'agm-direction'
})
export class AgmDirection implements OnChanges, OnInit {

  @Input() origin: { lat, lng };
  @Input() destination: { lat, lng };
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

  ngOnChanges(changes: { [key: string]: SimpleChange }) {
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
      }, (response, status) => {
        if (status === 'OK') {
          this.directionsDisplay.setDirections(response);
        }
      });

    });

  }
}

