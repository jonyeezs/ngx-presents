import { Directive, ElementRef, Renderer2, OnInit, Input } from '@angular/core';

export interface TransitionSettings {
  delay: number;
  type: 'remove'|'hidden'; //TODO be nice if it was typed safe to transitionTypes
}

@Directive({
  selector: '[psTransition]'
})
export class TransitionDirective implements OnInit {

  // The type represents the css style:
  //   * remove - as in element was never there
  //   * hidden - as though something is suppose to be there
  private transitionTypes = {
    remove: {
      style: 'display', value: 'none'
    },
    hidden: {
      style: 'visibility', value: 'hidden'
    }
  }

  @Input('psTransition') settings: TransitionSettings|string;

  constructor(private renderer: Renderer2, private hostElement: ElementRef) {}

  ngOnInit() {
    //Setup default
    let settings = (typeof this.settings === 'string') ? {delay: +this.settings, type: 'hidden'} : this.settings;

    let prevStyleValue = this.replaceStyleForTransitioning(this.transitionTypes[settings.type]);

    this.beginTransition(this.transitionTypes[settings.type], settings.delay, prevStyleValue);
  }

  private replaceStyleForTransitioning(type) {
    let prevStyleValue = getComputedStyle(this.hostElement.nativeElement)[type.style];

    this.renderer.setStyle(this.hostElement.nativeElement, type.style, type.value);

    return prevStyleValue;
  }

  private beginTransition(type, delay: number, valueForRevert) {
    setTimeout(
      () => {
        this.renderer.setStyle(this.hostElement.nativeElement, type.style, valueForRevert);
      },
      delay * 1000);
  }
}