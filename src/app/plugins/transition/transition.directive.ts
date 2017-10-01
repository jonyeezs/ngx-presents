import { Directive, ElementRef, Renderer2, OnInit, Input } from '@angular/core';


@Directive({
  selector: '[psTransition]'
})
export class TransitionDirective implements OnInit {

  @Input('psTransition') transition: string;
  @Input() transitionDelay: string;

  constructor(private renderer: Renderer2, private hostElement: ElementRef) {}

  ngOnInit() {
    const delay = +this.transitionDelay;

    const {init: startClass, end: endClass} = this.evaluateTransitionStates(this.transition);

    this.forwardTransition(startClass, endClass, delay);
  }

  private evaluateTransitionStates(transition) {
    const initialState = this.transition.match(/^([a-zA-Z\-]+)=>/i)[1].toLowerCase();
    const endState = this.transition.match(/=>([a-zA-Z\-]+)$/i)[1].toLowerCase();

    return { init: initialState, end: endState };
  }

  private forwardTransition(startClass: string, endClass: string, delay) {
    this.renderer.addClass(this.hostElement.nativeElement, startClass);

    setTimeout(() => {
      this.renderer.removeClass(this.hostElement.nativeElement, startClass);
      this.renderer.addClass(this.hostElement.nativeElement, endClass);
    }, delay * 1000);
  }
}