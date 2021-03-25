import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[oaIf]'
})
export class OaIfDirective {
  @Input('oaIf') set isShown(condition: boolean) {
    if(condition)
      this.viewContainer.createEmbeddedView(this.templateRef)
    else
      this.viewContainer.clear()

  }
  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>,
  ) {
    console.log(this.templateRef);
    console.log(this.viewContainer);

  }

}
