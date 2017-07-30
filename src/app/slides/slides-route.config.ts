import { Routes, Route } from '@angular/router';
import { SlideContainerComponent } from './slide-container.component';

const RoutesList: Route[] = [
 // Order routes by slides transition from first to last
];

export const SlidesRoute: Route =   {
  path: 'slides',
  component: SlideContainerComponent,
  children: RoutesList
};

export const RoutesConfig: Routes = [
  SlidesRoute
];
