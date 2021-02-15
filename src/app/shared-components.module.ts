import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp1ComponentComponentModule } from './comp1/comp1.module';
import { Comp2Component } from './comp2/comp2.component';
import { Comp2ComponentComponentModule } from './comp2/comp2.module';
import { ExploreContainerComponent } from './explore-container/explore-container.component';
import { ExploreContainerComponentModule } from './explore-container/explore-container.module';
import { Tab1PageRoutingModule } from './tab1/tab1-routing.module';
import { Tab1PageModule } from './tab1/tab1.module';
import { Tab2PageRoutingModule } from './tab2/tab2-routing.module';
import { Tab2PageModule } from './tab2/tab2.module';
import { Tab3PageRoutingModule } from './tab3/tab3-routing.module';
import { Tab3PageModule } from './tab3/tab3.module';
import { Tab4PageRoutingModule } from './tab4/tab4-routing.module';
import { Tab4PageModule } from './tab4/tab4.module';
import { TabsPageRoutingModule } from './tabs/tabs-routing.module';
import { TabsPageModule } from './tabs/tabs.module';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component,
    ExploreContainerComponent
  ],
  entryComponents: [],

  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    Comp1ComponentComponentModule,
    Comp2ComponentComponentModule,
    TabsPageModule,
    TabsPageRoutingModule,
    Tab1PageModule,
    Tab1PageRoutingModule,
    Tab2PageModule,
    Tab2PageRoutingModule,
    Tab3PageModule,
    Tab3PageRoutingModule,
    Tab4PageModule,
    Tab4PageRoutingModule,
    ExploreContainerComponentModule
  ],

  exports:[
    AppComponent,
    Comp1Component,
    Comp2Component,
    ExploreContainerComponent,
    AppRoutingModule,
    Comp1ComponentComponentModule,
    Comp2ComponentComponentModule,
    TabsPageModule,
    TabsPageRoutingModule,
    Tab1PageModule,
    Tab1PageRoutingModule,
    Tab2PageModule,
    Tab2PageRoutingModule,
    Tab3PageModule,
    Tab3PageRoutingModule,
    Tab4PageModule,
    Tab4PageRoutingModule,
    ExploreContainerComponentModule
  ],

  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class SharedAppModule {}
