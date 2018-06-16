/**
 * This is only for local test
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AgmCoreModule } from '@agm/core';
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

  origin: String = 'Taipei Main Station';
  destination: String = 'National Taiwan University of Science and Technology';
  renderOptions = {
    suppressMarkers: true,
  }
  markerOptions = {
    origin: {
      icon: 'https://i.imgur.com/7teZKif.png',
    },
    destination: {
      icon: 'https://i.imgur.com/7teZKif.png',
      infoWindow: `<h4>Hello<h4><a href='http://www-e.ntust.edu.tw/home.php' target='_blank'>Taiwan Tech</a>`
    },
  };

  dirChange(event: any) {
    console.log(event);
  }
}

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({ // @agm/core
      apiKey: 'AIzaSyDFTKbcSXEN22pUx3zfaabEOGyy7oOZtmI',
    }),
    AgmDirectionModule
  ]
})
class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
