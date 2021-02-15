import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Comp2Component } from './comp2.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [Comp2Component],
  exports: [Comp2Component]
})
export class Comp2ComponentComponentModule {}
