# Agm-Direction

[![npm version](https://badge.fury.io/js/agm-direction.svg)](https://badge.fury.io/js/agm-direction)
[![npm](https://img.shields.io/npm/dm/localeval.svg)](https://github.com/explooosion/Agm-Direction)
[![Dependency Status](https://david-dm.org/explooosion/Agm-Direction.svg?theme=shields.io)](https://david-dm.org/explooosion/Agm-Direction)
[![GitHub license](https://img.shields.io/github/license/explooosion/Agm-Direction.svg)](https://github.com/explooosion/Agm-Direction)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)


[Agm-Direction](https://github.com/explooosion/Agm-Direction) is the directive for [@agm/core](https://github.com/SebastianM/angular-google-maps) (not official)

- Angular 2+
- Google Map API
- [Playground](https://stackblitz.com/edit/angular-lwchvs)  

👉 [Start Reading](http://robby570.tw/Agm-Direction-Docs/) (🚧not yet)

![Agm-Direction](https://i.imgur.com/DCIoXqS.jpg)

### Feature

- [Remove Direction](#RemoveDirection)
- [Show Panel Direction](#ShowPanelDirection)
- [Directions Renderer Options](#DirectionsRendererOptions)
- [Directions Service](#DirectionsService)
- [Custom Icons](#CustomIcons)

## Installation

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

+ Install @agm/core
  ```bash
  npm install --save @agm/core
  ```

+ Install agm-direction
  ```bash
  npm install --save agm-direction
  ```

## Importing Modules

+ @agm/core
+ agm-direction

```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';            // @agm/core
import { AgmDirectionModule } from 'agm-direction';   // agm-direction

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({ // @agm/core
      apiKey: 'your key',
    }),
    AgmDirectionModule      // agm-direction
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## Usage

+ HTML

  ```html
  <button type="button" (click)="getDirection()">Get</button>

  <agm-map [latitude]="lat" [longitude]="lng">
    <agm-direction *ngIf="dir" [origin]="dir.origin" [destination]="dir.destination"></agm-direction>
  </agm-map>
  ```

+ CSS

  ```css
  agm-map {
      height: 400px;
  }
  ```

+ TS

  ```ts
    lat: Number = 24.799448;
    lng: Number = 120.979021;
    zoom: Number = 14;

    dir = undefined;

    getDirection() {
      this.dir = {
        origin: { lat: 24.799448, lng: 120.979021 },
        destination: { lat: 24.799524, lng: 120.975017 }
      }
    }
  ```

## Properties

#### Input

The `DirectionsRequest` object literal contains the following fields:

👉 [DirectionsRequest](https://developers.google.com/maps/documentation/javascript/directions?hl=en#DirectionsRequests)

```ts
{
  origin: { lat: Number, lng: Number },
  destination: { lat: Number, lng: Number },
  travelMode: string = 'DRIVING',
  transitOptions: any = undefined,
  drivingOptions: any = undefined,
  waypoints: object = [],
  optimizeWaypoints: boolean = true,
  provideRouteAlternatives: boolean = false,
  avoidHighways: boolean = false,
  avoidTolls: boolean = false,
  renderOptions: any,
  visible: boolean = true,
  panel: object | undefined,
  markerOptions: { origin: any, destination: any },
}
```

#### Output

The `DirectionsResult` object will emit when sending a directions request.

👉 [DirectionsResult](https://developers.google.com/maps/documentation/javascript/directions?hl=en#DirectionsResults)

```ts
{
  onChange: EventEmitter<any> = new EventEmitter<any>(),
}
```

## Featured

<a id="RemoveDirection"></a>

#### Remove Direction

+ HTML

  ```html
  <agm-direction ... [visible]="show"></agm-direction>
  ```

+ TS

  ```ts
  this.show = false
  ```

<a id="ShowPanelDirection"></a> 

#### Show Panel Direction

Use of the DirectionsRenderer object to display a directions [panel](https://developers.google.com/maps/documentation/javascript/examples/directions-panel?hl=zh-tw).

+ HTML

  ```html
  <agm-direction ... [panel]="myPanel"></agm-direction>
  <div #myPanel></div>
  ```

Or you could define a function using the panel:

+ HTML

  ```html
  <agm-direction ... [panel]="setPanel()"></agm-direction>
  <div id="myPanel"></div>
  ```

+ TS

  ```ts
  function setPanel(){
    return document.querySelector('#myPanel'); 
  }
  ```

<a id="DirectionsRendererOptions"></a>

#### Directions Renderer Options

This object defines the properties that can be set on a [DirectionsRenderer](https://developers.google.com/maps/documentation/javascript/reference#DirectionsRendererOptions) object.

+ HTML

  ```html
  <agm-direction ... [renderOptions]="options"></agm-direction>
  ```

+ TS

  ```ts
  options = {
    suppressMarkers: true,
    draggable: true,
    markerOptions: {
      icon: 'my_marker.png'
    },
    ...
  };
  ```

<a id="DirectionsService"></a>

#### Directions Service

You can calculate directions (using a variety of methods of transportation) by using the [DirectionsService](https://developers.google.com/maps/documentation/javascript/directions?hl=en-US) object. 

1. [Driving Options](https://developers.google.com/maps/documentation/javascript/directions?hl=en-US#DrivingOptions) - drivingOptions

2. [Transit Options](https://developers.google.com/maps/documentation/javascript/directions?hl=en-US#TransitOptions) - transitOptions

+ HTML

  ```HTML
  <agm-direction ... [transitOptions]="transitOptions" [travelMode]="travelMode"></agm-direction>

  <!-- or -->

  <agm-direction ... [drivingOptions]="drivingOptions"></agm-direction>

  ```

+ TS

  ```ts
  transitOptions = {
        departureTime: new Date('2018/03/20 12:00'),
        modes: ['BUS'],
  };
  travelMode = 'TRANSIT';
  ```

<a id="CustomIcons"></a>

#### Custom Icons

You can change the icons of origin and destination.

👉 [MarkerOptions](https://developers.google.com/maps/documentation/javascript/reference?hl=zh-tw#MarkerOptions)

+ HTML

  ```HTML
  <agm-direction ... [renderOptions]="renderOpts" [markerOptions]="markerOpts"></agm-direction>
  ```

+ TS

  ```ts
  renderOpts = {
    suppressMarkers: true,
  };

  markerOpts = {
    origin: {
      icon: 'your-icon-url',
    },
    destination: {
      icon: 'your-icon-url',
      label: 'marker label',
      opacity: 0.8,
      // ... properties
    },
  };
  ```

## Event

#### Remove Direction

[DirectionsResult ](https://developers.google.com/maps/documentation/javascript/directions?hl=en#DirectionsResults) is a result when sending a directions request to the DirectionsService.

+ HTML

  ```html
  <agm-direction ... (onChange)="dirChange($event)"></agm-direction>
  ```

+ TS

  ```ts
  dirChange(event:any){
    console.log(event);
    // You can do anything.
  }
  ```

## Document
Less useful [document](https://robby570.tw/Agm-Direction/).

## Generator 
This library generated by [generator-angular2-library](https://github.com/jvandemo/generator-angular2-library).

## License

[MIT](http://opensource.org/licenses/MIT)
