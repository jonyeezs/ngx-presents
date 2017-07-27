import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ps-header',
  template: `
    <p>
      header works!
    </p>
  `,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
