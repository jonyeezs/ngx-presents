import { Directive, ElementRef, Renderer2, OnInit, Input } from '@angular/core';
import { AnimationBuilder, style, animate } from '@angular/animations';

const AvailableTransitions = [
  { transition: 'hidden=>visible', toShow: true },
  { transition: 'visible=>hidden', toShow: false },
  { transition: 'none=>display', toShow: true },
  { transition: 'display=>none', toShow: false }
];

@Directive({
  selector: '[psTransition]'
})
export class TransitionDirective implements OnInit {

  @Input('psTransition') transition: string;
  @Input() transitionDelay: string;

  constructor(private renderer: Renderer2, private hostElement: ElementRef, private animationBuilder: AnimationBuilder) {}

  ngOnInit() {
    const styles = this.getStyles();
    const delay = +this.transitionDelay;

    const transitionSettings = this.evaluateTransitionStates(this.transition);

    this.setInitialState(styles[transitionSettings.init]);

    let transitionAnimation = this.createTransition(styles[transitionSettings.end], transitionSettings.isToShow);

    setTimeout(() => {
      transitionAnimation
      .create(this.hostElement.nativeElement)
      .play();
    }, delay * 1000);
  }

  private createTransition(stateStyles: Map<string, string>, isToShow: boolean) {
    const transitionOrder = isToShow ?
      ['max-height', 'max-width', 'visibility', 'opacity']
      : ['opacity', 'max-height', 'max-width', 'visibility'];

    const easeIt = isToShow ? 'ease-in' : 'ease-out';

    let animatedStyles = transitionOrder.reduce((total, curr, idx) => {
      if (!stateStyles.has(curr)) return total;
      let animatedStyle = {[curr]: stateStyles.get(curr)};

      total.push(animate(`1s ${50 * idx}ms ${easeIt}`, style(animatedStyle)));
      return total;
    }, []);

    return this.animationBuilder.build(animatedStyles);
  }

  private setInitialState(stateStyles: Map<string, string>) {
    stateStyles.forEach((value, key) => this.renderer.setStyle(this.hostElement.nativeElement, key, value));
  }

  private evaluateTransitionStates(transition) {
    const transitionState = AvailableTransitions.find((available) => available.transition === transition );
    if (!transitionState) throw `error not supported ${this.transition}`;

    const initialState = this.transition.match(/^([a-zA-Z]+)=>/i)[1].toLowerCase();
    if (!initialState) throw `error state ${initialState} not supported for ${this.transition}`;

    const endState = this.transition.match(/=>([a-zA-Z]+)$/i)[1].toLowerCase();
    if (!endState) throw `error state ${endState} not supported for ${this.transition}`;

    return { isToShow: transitionState.toShow, init: initialState, end: endState };
  }

  private getStyles() {
    let prevOpacity = getComputedStyle(this.hostElement.nativeElement).opacity;

    let hidden = new Map();
    hidden.set('opacity', '0'),
    hidden.set('visibility', 'hidden');

    let visible = new Map();
    visible.set('opacity', prevOpacity),
    visible.set('visibility', 'visible');

    let none = new Map();
    none.set('opacity', '0'),
    none.set('max-height', '0'),
    none.set('max-width', '0');

    let display = new Map();
    display.set('opacity', prevOpacity),
    display.set('max-height', getComputedStyle(this.hostElement.nativeElement).height),
    display.set('max-width', getComputedStyle(this.hostElement.nativeElement).width);

    return {
      hidden: hidden, visible: visible,
      none: none, display: display
    };
  }
}