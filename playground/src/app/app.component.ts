import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public title = 'playground';

  public lat = 24.799448;
  public lng = 120.979021;

  public origin: string | google.maps.Place | google.maps.LatLng | google.maps.LatLngLiteral = 'Taipei Main Station';
  public destination: string | google.maps.Place | google.maps.LatLng | google.maps.LatLngLiteral = 'Taiwan Presidential Office';

  public renderOptions: google.maps.DirectionsRendererOptions = { suppressMarkers: true };

  public markerOptions = { origin: { draggable: true }, destination: { draggable: true } };

  public change(event: google.maps.DirectionsResult) {
    const start = event.routes[0].legs[0].start_location;
    const end = event.routes[0].legs[0].end_location;
    console.log('start', start.lat(), start.lng());
    console.log('end', end.lat(), end.lng());
  }
}
