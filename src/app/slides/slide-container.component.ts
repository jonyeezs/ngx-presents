import { Component } from '@angular/core';

@Component({
  selector: 'ps-slide-container',
  template:
    `<section class="main">
      <ps-header></ps-header>

      <main class="container">
        <router-outlet psSlideNavigator></router-outlet>
      </main>

      <ps-footer></ps-footer>
    </section>`,
  styleUrls: ['./slide-container.component.css']
})
export class SlideContainerComponent {

  constructor() { }
}
