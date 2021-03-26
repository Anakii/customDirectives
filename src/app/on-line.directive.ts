import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[oaOnLine]'
})
export class OnLineDirective {
  private _offline: boolean

  @HostListener('window:online')
  activeBtn() {
    this._offline = false
  }
  @HostListener('window:offline')
  disabledBtn() {
    this._offline = true
  }

  @HostBinding('disabled')
  get offline() {
    return this._offline
  }

}
