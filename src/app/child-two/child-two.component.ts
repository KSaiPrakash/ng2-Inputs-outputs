import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'my-child-two',
  templateUrl: 'child-two.component.html',
  styleUrls: ['child-two.component.css'],
  inputs: ['parentData'],
  outputs: ['childTwoEvent']
})
export class ChildTwoComponent {

  public parentData: string;
  childTwoEvent = new EventEmitter<string>();

  onChange(val: string) {
    this.childTwoEvent.emit(val);
  }
}
