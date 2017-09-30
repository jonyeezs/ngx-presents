import { Directive, OnInit, Input } from '@angular/core';
import { StepService, StepState } from './step.service';

@Directive({
  selector: '[psStep]'
})
export class StepDirective implements OnInit {

  @Input('psStep') stepLookup: string;

  private stepCounter: number;
  constructor(private stepService: StepService) { }

  ngOnInit() {
    let step = +this.stepLookup;
    this.stepService
      .register(step)
      .subscribe((stepState: StepState) => {
        if (stepState.step === step) {
          console.log(this.stepLookup, stepState.isShow);
        }
      });
  }
}