import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from './first.component';

import { TransitionDirective } from '../../plugins/transition/transition.directive';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FirstComponent, TransitionDirective],
  exports: [FirstComponent]
})
export class FirstModule { }
