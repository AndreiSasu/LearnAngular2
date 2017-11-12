import { Component, OnInit, OnChanges, DoCheck,
AfterContentInit, AfterContentChecked,
 AfterViewInit, AfterViewChecked, OnDestroy, Input, ViewChild, ContentChild } from '@angular/core';

@Component({
  selector: 'app-lifecyle',
  template: `
   <ng-content></ng-content>
   <hr>
   <p #boundParagraph>{{bindable}}</p>
   <p>{{boundParagraph.textContent}}</p>
  `,
  styles: []
})
export class LifecyleComponent implements OnChanges,
OnInit, DoCheck, AfterContentInit, AfterContentChecked,
AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() bindable = 1000;


  // references boundParagraph from the template
  @ViewChild('boundParagraph')
  boundParagraph: string;


  @ContentChild('boundContent')
  boundContent: string;

  constructor() { }

  ngOnChanges() {
    this.log('ngOnChanges');
  }
  ngOnInit() {
    this.log('ngOnInit');
  }
  ngDoCheck() {
    this.log('ngDoCheck');
  }
  ngAfterContentInit() {
    this.log('ngAfterContentInit');
    this.log(this.boundContent);
  }

  ngAfterContentChecked() {
    this.log('ngAfterContentChecked');

  }

  ngAfterViewInit(){
    this.log('ngAfterViewInit');
    this.log(this.boundParagraph);
  }
  ngAfterViewChecked() {
    this.log('ngAfterViewChecked');
  }
  ngOnDestroy() {
    this.log('ngOnDestroy');
  }

  private log(hook: string) {
    console.log(hook);
  }

}
