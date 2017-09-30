import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { StepModule } from '../../plugins/step/step.module';

@NgModule({
  imports: [
    CommonModule,
    StepModule
  ],
  declarations: [AboutComponent],
  exports: [AboutComponent]
})
export class AboutModule { }