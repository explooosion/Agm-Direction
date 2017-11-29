# Agm-Direction
this is the directive for [@agm/core](https://github.com/SebastianM/angular-google-maps)

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
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';

import { AgmDirectionModule } from 'agm-direction';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'your key',
    }),
    AgmDirectionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

## Use
```html
<agm-map [latitude]="lat" [longitude]="lng">

  <agm-direction *ngIf="dir" [origin]="dir.origin" [destination]="dir.destination"></agm-direction>

</agm-map>
```

## Attribute
+ origin: { lat, lng };
+ destination: { lat, lng };
+ waypoints: Object = [];
+ travelMode: String = 'DRIVING';
+ optimizeWaypoints: Boolean = true;

