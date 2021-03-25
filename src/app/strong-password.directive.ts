import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import estimate from "zxcvbn";
@Directive({
  selector: '[oaStrongPassword]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: StrongPasswordDirective,
      multi: true
    }
  ]
})
export class StrongPasswordDirective implements Validator {

  constructor(private hostElement: ElementRef<HTMLUnknownElement>, private renderer: Renderer2) { }

  validate(control: AbstractControl): ValidationErrors | null {
    const value: string = control.value;
    if (!value) {
      this.removeClasses(['weak','strong'])
      return null;
    }
    const estimateResult = estimate(value);
    console.log(estimateResult);

    if (estimateResult.score < 4) {
      this.setWeakClass();
      return { feedback: estimateResult.feedback };
    }

    this.setStrongClass();

  }


  private removeClasses(classToRemove: string[]): void {
    classToRemove.forEach(cssClass => {
      this.renderer.removeClass(this.hostElement.nativeElement, cssClass)
    })
  }
  private addClasses(classToRemove: string[]): void {
    classToRemove.forEach(cssClass => {
      this.renderer.addClass(this.hostElement.nativeElement, cssClass)
    })
  }
  private setStrongClass(): void {
    this.removeClasses(['weak'])
    this.addClasses(['strong'])
  }
  private setWeakClass(): void {
    this.removeClasses(['strong'])
    this.addClasses(['weak'])
  }
}
