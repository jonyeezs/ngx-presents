import { Directive, HostListener } from '@angular/core';

import { SlidesRouteNavigatorService } from '../slides-route-navigator/slides-route-navigator.service';

const enum KEY_CODE  {
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37
};

@Directive({
  selector: '[psSlideNavigator]'
})
export class SlideNavigatorDirective {

  constructor(private slideTransition: SlidesRouteNavigatorService) {}

  @HostListener('window:keyup', ['$event'])
    keyEvent(event: KeyboardEvent) {
      if (event.srcElement.tagName !== 'BODY') return;

      if (event.keyCode === KEY_CODE.RIGHT_ARROW) {
        this.slideTransition.next();
      }

      if (event.keyCode === KEY_CODE.LEFT_ARROW) {
        this.slideTransition.previous();
      }
    }

}
