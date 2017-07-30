import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { SlidesRoute } from '../../slides/slides-route.config';

@Injectable()
export class SlidesRouteNavigatorService {
  private slidesOrder = SlidesRoute.children;
  private current: number;

  constructor(private router: Router) {
      this.current = 0;
  }

  next() {
    if ((this.current + 1) === this.slidesOrder.length) {
      console.log('we\'ve reached the end of our presentation.');
      return;
    }
    this.router.navigateByUrl(`/${SlidesRoute.path}/${this.slidesOrder[++this.current].path}`);
  }

  previous() {
    if (this.current === 0) {
      console.log('we\'re at the start already!');
      return;
    }
    this.router.navigateByUrl(`/${SlidesRoute.path}/${this.slidesOrder[this.current--]}`);
  }
}
