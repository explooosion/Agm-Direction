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

  public waypoints: Array<any> = [
    { location: 'Chung Shan Medical University, Taiwan', stopover: true },
    { location: 'National Chung Hsing University, Taiwan', stopover: true },
  ];

  // Hide origin polylines
  public renderOptions = { suppressPolylines: true };

  // Custom polylines
  public polylines: Array<google.maps.Polyline> = [];

  // Current map
  public map: google.maps.Map;

  // Save GoogleMap instance
  public onMapReady(event: google.maps.Map): void {
    this.map = event;
  }

  public onResponse(event: google.maps.DirectionsResult): void {

    // Default style
    const polylineOptions: google.maps.PolygonOptions = {
      strokeWeight: 6,
      strokeOpacity: 0.55,
    };

    // Polylines strokeColor
    const colors = ['#0000FF', '#FF0000', '#0000FF'];

    // Clear exist polylines
    this.polylines.forEach(polyline => polyline.setMap(null));

    const { legs } = event.routes[0];

    legs.forEach((leg, index) => {

      leg.steps.forEach(step => {
        const nextSegment = step.path;
        const stepPolyline = new google.maps.Polyline(polylineOptions);

        // Custom color
        stepPolyline.setOptions({ strokeColor: colors[index] });

        nextSegment.forEach(next => stepPolyline.getPath().push(next));

        this.polylines.push(stepPolyline);
        stepPolyline.setMap(this.map);
      });
    });
  }
}
