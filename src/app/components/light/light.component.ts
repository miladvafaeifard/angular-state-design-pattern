import { Component, Input } from '@angular/core';

@Component({
  selector: 'light',
  templateUrl: './light.component.html',
  styleUrls: [ './light.component.scss' ]
})
export class LightComponent {
  @Input() status: string;
}