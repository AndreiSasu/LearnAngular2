import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  template: `
    <input type="text" [(ngModel)]="person.name">
    <input type="text" [(ngModel)]="person.name">
  `,
  styles: []
})
export class TwoWayBindingComponent implements OnInit {

  person = {
    name: 'Max',
    age: 27
  }
  constructor() { }

  ngOnInit() {
  }

}
