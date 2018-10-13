import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LightComponent } from './components/light/light.component';
import { PatternComponent } from './pattern.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, PatternComponent, LightComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
