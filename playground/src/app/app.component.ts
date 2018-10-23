import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public lat: Number = 24.799448;
  public lng: Number = 120.979021;

  public origin: any = 'Taichung Main Station';
  public destination: any = 'Taichung City Government';

  public renderOptions: object = { polylineOptions: { strokeColor: '#f0f' } };

}
