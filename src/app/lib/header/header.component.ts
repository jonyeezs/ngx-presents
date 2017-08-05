import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ps-header',
  template: `
    <header class="header-container">
      <div class="header-title">
        <span class="title-prefix">NGX<span class="title-dash">❇︎</span></span><span>PRESENTS</span><span class="title-icon">🍿🎦<i class="fa fa-exclamation title-exclaimed" aria-label="true"></i></span>
      </div>
    </header>`,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
