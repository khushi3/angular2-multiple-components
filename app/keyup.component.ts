import { Component } from '@angular/core';

@Component({
  selector: 'key-up2',
  template: `
    <input #box (keyup)="onKey(box.value)">
    <p>{{values}}</p>
  `
})
export class KeyUpComponent {
  values = '';
  onKey(value: string) {
    this.values += value + ' | ';
  }
}