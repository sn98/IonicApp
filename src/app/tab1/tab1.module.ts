import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { Comp1ComponentComponentModule } from '../comp1/comp1.module';
import { Comp2ComponentComponentModule } from '../comp2/comp2.module';
import { AppModule } from '../app.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Comp1ComponentComponentModule,
    Comp2ComponentComponentModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
