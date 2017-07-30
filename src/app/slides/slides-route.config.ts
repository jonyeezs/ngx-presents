import { Routes, Route } from '@angular/router';
import { SlideContainerComponent } from './slide-container.component';
import { FirstComponent } from './first/first.component';

const RoutesList: Route[] = [
 // Order routes by slides transition from first to last
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
