import { NgModule, ModuleWithProviders } from '@angular/core';
import { AgmDirection } from './agm-direction.directive';
export * from './agm-direction.directive';

@NgModule({
  imports: [],
  declarations: [
    AgmDirection,
  ],
  exports: [
    AgmDirection,
  ]
})
export class AgmDirectionModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AgmDirectionModule,
    };
  }
}
