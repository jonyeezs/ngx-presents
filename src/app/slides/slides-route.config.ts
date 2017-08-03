import { Routes, Route } from '@angular/router';
import { SlideContainerComponent } from '../lib/slide-container/slide-container.component';
import { FirstComponent } from './first/first.component';

const RoutesList: Route[] = [
 // Order routes by slides transition from first to last
 // Path being the slide name (prefixed to /slides/*)
  {
    path: '1', component: FirstComponent
  }
];

export const SlidesRoute: Route =   {
  path: 'slides',
  component: SlideContainerComponent,
  children: RoutesList
};

export const RoutesConfig: Routes = [
  SlidesRoute
];
