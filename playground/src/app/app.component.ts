import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public lat: Number = 24.799448;
  public lng: Number = 120.979021;

  public origin: any = { lat: 24.799448, lng: 120.979021 };
  public destination: any = { lat: 24.799524, lng: 120.975017 };

  public visible: Boolean = false;

  hide() {
    this.visible = !this.visible;
  }
}
