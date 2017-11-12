import { Directive,
TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[dirUnless]'
})
export class UnlessDirective {

  @Input() set dirUnless(condition: boolean) {
      if(!condition) {
        this.vcRef.createEmbeddedView(this.templateRef);
      } else {
        this.vcRef.clear();
      }
  }

/**
TemplateRef: what should be rendered
ViewContainerRef: position where this
should be rendered
**/
  constructor(
    private templateRef: TemplateRef<any>,
  private vcRef: ViewContainerRef ) { }

}
