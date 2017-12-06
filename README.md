# Agm-Direction
[![npm version](https://badge.fury.io/js/agm-direction.svg)](https://badge.fury.io/for/js/agm-direction)   

[Agm-Direction](https://github.com/explooosion/Agm-Direction) is the directive for [@agm/core](https://github.com/SebastianM/angular-google-maps)
+ Angular 2+
+ Google Map API 

![Agm-Direction](https://i.imgur.com/DCIoXqS.jpg)

## Install
+ you must install @agm/core
  ```bash
  npm install --save @agm/core
  ```
+ install agm-direction
  ```bash
  npm install --save agm-direction
  ```

## Import 

+ @agm/core
+ agm-direction

```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core'; 
import { AgmDirectionModule } from 'agm-direction';

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

## Use
+ HTML
```html
<agm-map [latitude]="lat" [longitude]="lng">

  <agm-direction *ngIf="dir" [origin]="dir.origin" [destination]="dir.destination"></agm-direction>

</agm-map>

<button type="button" (click)="getDirection()">Get</button>
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

  public getDirection() {
    this.dir = {
      origin: { lat: 24.799448, lng: 120.979021 },
      destination: { lat: 24.799524, lng: 120.975017 }
    }
  }
```

## Attribute
+ origin: { lat, lng };
+ destination: { lat, lng };
+ waypoints: Object = [];
+ travelMode: String = 'DRIVING';
+ optimizeWaypoints: Boolean = true;


## Warning

Now it's ***not*** support Angular5+
  
![error](https://user-images.githubusercontent.com/11458959/32315694-202ee1de-bfe8-11e7-87cf-42394526d447.png)  

You can use ___--aot___  to fix this error：
```bash
ng serve --aot
```


Or following the Angular issues：
+ [is not part of the compilation output, angular 5](https://github.com/angular/angular/issues/20741)

+ [Angular v5.0.0 is not part of the compilation output. Please check the other error messages for details.](https://github.com/angular/angular/issues/20091)
