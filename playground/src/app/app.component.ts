import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public lat = 24.799448;
  public lng = 120.979021;

  public origin: any = 'Taichung Railway Station, Taiwan';
  public destination: any = 'Wenxin Forest Park, Taiwan';

  public renderOptions = {
    suppressMarkers: true,
  }

  public markerOptions = {
    origin: {
      draggable: true,
    },
    destination: {
      draggable: true,
    },
  }

  public change(event: any) {
    const start = event.routes[0].legs[0].start_location;
    const end = event.routes[0].legs[0].end_location;
    console.log('start', start.lat(), start.lng());
    console.log('end', end.lat(), end.lng());
  }
}
