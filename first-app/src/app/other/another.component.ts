import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-another',
  template: `
    <article>
      // another Works!
      <ng-content></ng-content> //renders all content found underneath
    </article>
  `,
  styles: [`
    article{
      border: 1px solid black;
    }`]
  // styleUrls: ['./another.component.css']
})
export class AnotherComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
