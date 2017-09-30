import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/concatMap';
import 'rxjs/add/operator/concat';
import 'rxjs/add/operator/share';

export interface StepState {
  step: number;
  isShow: boolean
}

@Injectable()
export class StepService {
  private currentStep: number;
  private maxStep: number;
  private stepObserver: Observable<StepState>

  constructor() {
    this.currentStep = this.maxStep = 0;
    this.stepObserver = Observable.fromEvent(document, 'keydown')
      .filter((event: KeyboardEvent) => {
        return event.srcElement.tagName === 'BODY' && (event.key === 'ArrowDown' || event.key === 'ArrowUp');
      })
      .concatMap(this.calibrateAndMapToStepState)
      .filter(this.inRangeSteps)
      .share();
  }

  register(stepNumber) {
    this.maxStep = stepNumber > this.maxStep ? stepNumber : this.maxStep;
    return this.stepObserver;
  }

  private calibrateAndMapToStepState = (event: KeyboardEvent) => {
    const isForwards = event.key === 'ArrowDown';

    const updatedStep = this.currentStep + (isForwards ? 1 : -1);

    let firstChange = Observable.of({
      step: this.currentStep,
      isShow: false
    });

    let secondChange = Observable.of({
      step: updatedStep,
      isShow: true
    });

    //calibrate
    this.currentStep = updatedStep;
    if (this.currentStep < 0) this.currentStep = 0;
    if (this.currentStep > this.maxStep) this.currentStep = this.maxStep;

    return firstChange.concat(secondChange);
  }

  private inRangeSteps = (stepState: StepState) => {
    const isInRange = stepState.step > 0 && stepState.step <= this.maxStep;
    const isUnrulyMaxStep = stepState.step === this.maxStep && this.currentStep === this.maxStep && !stepState.isShow;
    return isInRange && !isUnrulyMaxStep;
  }
}