import { Directive, ElementRef, Input, Renderer, HostListener,
HostBinding, OnInit } from '@angular/core';

@Directive({ selector: '[appHighlight]' })
export class HighlightDirective {


  @Input() defaultColor = 'white';
  @Input() highlightColor = 'green';

  private backgroundColor: string;

    /**
    Allows to define an event on the element
    **/
    @HostListener('mouseenter') mouseOver() {
      console.log(this.highlightColor);
        this.backgroundColor = this.highlightColor;
    };

    @HostListener('mouseleave') mouseLeave() {
        this.backgroundColor = this.defaultColor;
    };

    /**
    Attribute on the hosting element
    **/
    @HostBinding('style.backgroundColor') get setColor() {
        return this.backgroundColor;
    };


    /**
    el: The element this directive applied to
    **/
    constructor(private el: ElementRef, private renderer: Renderer) {
       // el.nativeElement.style.backgroundColor = 'yellow';
     //   this.renderer.setElementStyle(this.el.nativeElement,
     // 'background-color', 'green')
    }


    ngOnInit() {
      this.backgroundColor = this.defaultColor;
    }
}
