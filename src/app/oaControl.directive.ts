import { Directive, HostBinding } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[oaControl]'
})
export class ControlDirective {

  constructor(private control:NgControl) { 
    console.log(this.control);
  }

  @HostBinding('style.border-color')
  get borderColor(){
    return this.showBorder ? 'red' : ''
  }
  get showBorder(){
    return this.control.dirty || this.control.touched;
  }

}
