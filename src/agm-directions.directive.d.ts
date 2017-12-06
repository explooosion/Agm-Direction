import { OnChanges, OnInit } from '@angular/core';
import { GoogleMapsAPIWrapper } from '@agm/core';
export declare class AgmDirection implements OnChanges, OnInit {
    private gmapsApi;
    origin: {
        lat: Number;
        lng: Number;
    };
    destination: {
        lat: Number;
        lng: Number;
    };
    waypoints: Object;
    travelMode: String;
    optimizeWaypoints: Boolean;
    directionsService: any;
    directionsDisplay: any;
    constructor(gmapsApi: GoogleMapsAPIWrapper);
    ngOnInit(): void;
    ngOnChanges(): void;
    /**
     * This event is fired when the user creating or updating this direction
     */
    private directionDraw();
}
