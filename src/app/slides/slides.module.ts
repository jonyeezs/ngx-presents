import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';

import { SlidesRoutingModule } from './slides-routing.module';
import { SlidesRouteNavigatorService } from '../lib/slides-route-navigator/slides-route-navigator.service';
import { SlideNavigatorDirective } from '../lib/slide-navigator/slide-navigator.directive';
import { SlideContainerComponent } from './slide-container.component';

import { FirstModule } from './first/first.module';

@NgModule({
  imports: [
    CommonModule,
    SlidesRoutingModule,
    FirstModule
  ],
  declarations: [FooterComponent, HeaderComponent, SlideContainerComponent, SlideNavigatorDirective],
  exports: [FooterComponent, HeaderComponent],
  providers: [SlidesRouteNavigatorService]
})
export class SlidesModule { }
