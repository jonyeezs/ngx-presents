import { Injectable } from '@angular/core';
import { Router, NavigationEnd, RouterState } from '@angular/router';

import 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { SlidesRoute } from '../../slides/slides-route.config';

@Injectable()
export class SlidesRouteNavigatorService {
  private slidesOrder = SlidesRoute.children;
  private slidePath = SlidesRoute.path;
  private current: number;

  constructor(private router: Router) {
      this.current = 0;

      router.events
        .filter((event) => event instanceof NavigationEnd && event.url.includes(`/${this.slidePath}/`))
        .subscribe((event: NavigationEnd) => {
          const slideRegex = new RegExp(`\/${this.slidePath}\/([a-zA-Z0-9-_+]+)`,"i");
          const currentSlide = event.url.match(slideRegex)[1];
          this.current = this.slidesOrder.findIndex((slide) => slide.path === currentSlide);
        });
  }

  next() {
    if ((this.current + 1) === this.slidesOrder.length) {
      console.log('we\'ve reached the end of our presentation.');
      return;
    }
    this.router.navigateByUrl(`/${this.slidePath}/${this.slidesOrder[++this.current].path}`);
  }

  previous() {
    if (this.current === 0) {
      console.log('we\'re at the start already!');
      return;
    }
    this.router.navigateByUrl(`/${this.slidePath}/${this.slidesOrder[--this.current].path}`);
  }
}
