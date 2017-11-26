import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AgmDirection } from './directive/agm-directions.directive';
import { AppComponent } from './app.component';
import { MapComponent } from './component/map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    AgmDirection,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: '',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AgmDirectionModule { }
