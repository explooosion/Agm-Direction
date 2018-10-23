import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public lat: Number = 24.799448;
  public lng: Number = 120.979021;

  public origin: any = 'No. 1, Section 1, Taiwan Avenue, Central District, Taichung, Taiwan';
  public destination: any = 'No. 1 Guanqian Road, North District, Taichung City';

  public renderOptions: object = { polylineOptions: { strokeColor: '#f0f' } };

  getStatus(status) {
    console.log('status', status);
  }
}
