import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[oaNumberOnly]'
})
export class NumberOnlyDirective {

  constructor(private hostElement: ElementRef<HTMLInputElement>) { }
  @HostListener('input', ['$event'])
  onInputChange($event: InputEvent) {
    const inCommingKey: string = $event.data
    if (!this.isANumber(inCommingKey)) {
      const nativeInputEl: HTMLInputElement = this.hostElement.nativeElement;
      const inputData: string[] = nativeInputEl.value.split("");
      const charInx: number = inputData.findIndex((ch) => ch === inCommingKey)
      inputData.splice(charInx, 1)
      nativeInputEl.value = inputData.join("")

    }

  }
  isANumber(value: any): boolean {
    return Number.isInteger(+value)
  }

}
