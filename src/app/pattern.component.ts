import { Component, Input } from '@angular/core';

@Component({
  selector: 'pattern',
  template: `<h1>{{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class PatternComponent  {
  @Input() name: string;
}
