import { Component, Input } from '@angular/core';
import { SWITCH } from './constant';

@Component({
  selector: 'light',
  templateUrl: './light.component.html',
  styleUrls: [ './light.component.scss' ]
})
export class LightComponent {
  @Input() status: string;
  isON = SWITCH.ON;
}
