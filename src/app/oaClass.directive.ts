import { Directive, DoCheck, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[oaClass]'
})
export class ClassDirective implements DoCheck {
  @Input('oaClass') cssMap: Record<string, boolean>;
  constructor(private hostElement:ElementRef,private renderer:Renderer2) { }
  ngDoCheck(): void {
      for (const [key,value] of Object.entries(this.cssMap)) {
          if(value===true)
            this.renderer.addClass(this.hostElement.nativeElement,key)
            else
            this.renderer.removeClass(this.hostElement.nativeElement,key)
            
        
      }
  }

}
