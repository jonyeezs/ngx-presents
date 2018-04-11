import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ps-footer',
  template: `
<footer class="footer-container">
  <div class="center-box">
    <div class="message-container">
      <p class="love">Made with <i class="fa fa-heart red-heart"></i> using
      <a href="https://angular.io/" class="icon-angular"></a> by Jonathan Yee</p>
      <p class="license">2014 Licensed under <a href="http://opensource.org/licenses/MIT">MIT</a></p>
    </div>
  </div>
  <div class="right-box">
    <div class="icon-container">
      <a href="https://www.reddit.com/user/jonyeezy7/">
        <span class="fa-layers fa-2x">
          <i class="fa fa-circle white-circle"></i>
          <i class="fab fa-reddit-alien inner-icon" data-fa-transform="shrink-4" aria-label="Reddit"></i>
        </span>
      </a>
      <a href="https://twitter.com/heyjonyee">
        <span class="fa-layers fa-2x">
          <i class="fa fa-circle white-circle"></i>
          <i class="fab fa-twitter inner-icon" data-fa-transform="shrink-4 down-.25 right-.25" aria-label="Twitter"></i>
        </span>
      </a>
      <a href="https://github.com/jonyeezs">
        <span class="fa-layers fa-2x">
          <i class="fa fa-circle white-circle"></i>
          <i class="fab fa-github inner-icon fa-inverse" data-fa-transform="shrink-4" aria-label="Github"></i>
        </span>
      </a>
    </div>
  </div>
</footer>`,
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
