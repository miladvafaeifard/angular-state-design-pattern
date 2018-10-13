import { Component } from '@angular/core';
import { LightBulb } from './lightBulb.state';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  ctx: LightBulb;
  status: string;
  name = 'State pattern';

  constructor() {
    this.ctx = new LightBulb();
    this.status = this.ctx.getStatus();
  }

  toggleLight() {
    this.ctx.toggle();
    this.status = this.ctx.getStatus();
  }
}
