import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepDirective } from './step.directive';
import { StepService } from './step.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [StepDirective],
  providers: [StepService],
  exports: [StepDirective]
})
export class StepModule { }