import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {UiModule} from './ui-module/ui.module';
import {DynamicCardModule} from './dynamic-card/dynamic-card.module';
import {AppRoutingModule} from './app-routing.module';
import {RuntimeModule} from './runtime/runtime.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiModule,
    DynamicCardModule,
    RuntimeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
