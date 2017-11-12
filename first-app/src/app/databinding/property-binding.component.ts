import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  template: `
  {{result}}
  `,
  styles: []
})
export class PropertyBindingComponent implements OnInit {
  //makes result bindable from the outside
   @Input() result: number = 0;

  constructor() { }

  ngOnInit() {
  }

}
