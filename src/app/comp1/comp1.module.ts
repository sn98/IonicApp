import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Comp1Component } from './comp1.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [Comp1Component],
  exports: [Comp1Component]
})
export class Comp1ComponentComponentModule {}
