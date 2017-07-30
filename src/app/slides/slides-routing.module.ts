import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RoutesConfig } from './slides-route.config';

@NgModule({
  imports: [RouterModule.forChild(RoutesConfig) ],
  exports: [RouterModule]
})
export class SlidesRoutingModule { }
