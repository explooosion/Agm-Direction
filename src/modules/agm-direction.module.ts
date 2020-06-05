import { NgModule, ModuleWithProviders } from '@angular/core';
import { AgmDirection } from '../directive/agm-direction.directive';

@NgModule({
  declarations: [
    AgmDirection,
  ],
  exports: [
    AgmDirection,
  ]
})
export class AgmDirectionModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: AgmDirectionModule,
    };
  }

  public static forChild(): ModuleWithProviders {
    return {
      ngModule: AgmDirectionModule,
    };
  }
}
