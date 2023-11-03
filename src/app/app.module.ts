import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoNgTemplateComponent } from './demo-ng-template/demo-ng-template.component';
import { DemoNgContainerComponent } from './demo-ng-container/demo-ng-container.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoNgTemplateComponent,
    DemoNgContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
