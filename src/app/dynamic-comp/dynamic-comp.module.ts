import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DynamicComponentComponent} from './dynamic-component/dynamic-component.component';
import {ByeComponent} from './bye/bye.component';
import {HelloComponent} from './hello/hello.component';
import {AppCompComponent} from './app-comp/app-comp.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    DynamicComponentComponent,
    ByeComponent,
    HelloComponent,
    AppCompComponent
  ],
  entryComponents: [
    ByeComponent,
    HelloComponent
  ],
  exports: [
    AppCompComponent
  ]
})
export class DynamicCompModule {
}
