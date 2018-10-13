import { Component } from '@angular/core';
import { Context, On, Off } from './State/state.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
  ctx: Context;
  status: string;
  name = 'State pattern';

  constructor(){
    this.ctx = new Context(new Off());
    this.status = this.ctx.getStatus();
  }

  toggleLight(){
    this.ctx.request();
    this.status = this.ctx.getStatus();
  }
}
