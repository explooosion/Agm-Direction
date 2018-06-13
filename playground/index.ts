/**
 * This is only for local test
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
class AppComponent {

  routes = []

  origin: String = '';
  destination: String = '';
  lat: Number = 24.799448;
  lng: Number = 120.979021;
  zoom: Number = 14;

  renderOpts = {
    draggable: true,
  };

  getDirection() {
    this.origin = 'Taipei Main Station';
    this.destination = 'Taiwan Presidential Office';
  }

  dirChange(event: any) {
    console.log(event);
    this.routes.push(event)
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
