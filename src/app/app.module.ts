import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {UiModule} from './ui-module/ui.module';
import {DynamicCardModule} from './dynamic-card/dynamic-card.module';
import {AppRoutingModule} from './app-routing.module';
import {RuntimeModule} from './runtime/runtime.module';
import {DynamicCompModule} from './dynamic-comp/dynamic-comp.module';
import {ReactiveFormModule} from './reactive-form/reactive-form.module';
import {DynamicFormModule} from './dynamic-form/dynamic-form.module';
import {DndContainerModule} from './dnd-container/dnd-container.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiModule,
    DynamicCardModule,
    RuntimeModule,
    DynamicCompModule,
    ReactiveFormModule,
    DynamicFormModule,
    DndContainerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
