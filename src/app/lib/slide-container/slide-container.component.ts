import { Component } from '@angular/core';

@Component({
  selector: 'ps-slide-container',
  template:
    `<section class="container">
      <ps-header class="header"></ps-header>

      <main class="main">
        <router-outlet psSlideNavigator></router-outlet>
      </main>

      <ps-footer class="footer"></ps-footer>
    </section>`,
  styleUrls: ['./slide-container.component.css']
})
export class SlideContainerComponent {

  constructor() { }
}
