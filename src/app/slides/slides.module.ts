import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from '../lib/footer/footer.component';
import { HeaderComponent } from '../lib/header/header.component';

import { RouterModule } from '@angular/router';
import { RoutesConfig } from './slides-route.config';

import { SlideNavigatorDirective } from '../lib/slide-navigator/slide-navigator.directive';
import { SlideContainerComponent } from '../lib/slide-container/slide-container.component';

import { FirstModule } from './first/first.module';
import { AboutModule } from './about/about.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(RoutesConfig),
    FirstModule,
    AboutModule
  ],
  declarations: [FooterComponent, HeaderComponent, SlideContainerComponent, SlideNavigatorDirective],
  exports: [FooterComponent, HeaderComponent],
  providers: []
})
export class SlidesModule { }