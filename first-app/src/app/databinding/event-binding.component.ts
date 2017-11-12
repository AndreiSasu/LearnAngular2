import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
    <button (click)="onClicked()">Click me!</button>
  `,
  styles: []
})
export class EventBindingComponent implements OnInit {

  //@ Output makes the event listenable
  // outside of the component (by other components)
  @Output() clicked = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClicked() {
    // alert("It worked!");
    this.clicked.emit('It works!');
  }

}
