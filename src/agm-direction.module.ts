/**
 * angular2 directive for agm
 * 
 * @author: @Robby <ta7382@gmail.com>
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmDirection } from './agm-directions.directive';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    AgmDirection
  ],
  exports: [
    AgmDirection
  ]
})
export class AgmDirectionModule { }