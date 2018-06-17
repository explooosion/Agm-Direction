/**
 * This is only for local test
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AgmCoreModule } from '@agm/core';
import { InfoWindow } from '@agm/core/services/google-maps-types';
import { AgmDirectionModule } from '../dist';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
class AppComponent {

  lat: Number = 24.799448;
  lng: Number = 120.979021;
  zoom: Number = 14;

  origin: Object = { lat: 24.799448, lng: 120.979021 };
  destination: Object = { lat: 24.799524, lng: 120.975017 };

  origin1: Object = { lat: 24.798448, lng: 120.972021 };
  destination1: Object = { lat: 24.789524, lng: 120.972017 };

  renderOptions = {
    suppressMarkers: true,
  }

  markerOptions = {
    origin: {
      icon: 'https://i.imgur.com/7teZKif.png',
    },
    destination: {
      icon: 'https://i.imgur.com/7teZKif.png',
      infoWindow: `
      <h4>Hello<h4>
      <a href='http://www-e.ntust.edu.tw/home.php' target='_blank'>Taiwan Tech</a>
      `
    },
  };

  infoWindow: InfoWindow = undefined;

  dirChange(event: any) {
    console.log(event);
  }

  obtainInfowindow(window: InfoWindow) {
    this.infoWindow = window
  }
}

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({ // @agm/core
      apiKey: '',
    }),
    AgmDirectionModule
  ]
})
class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
