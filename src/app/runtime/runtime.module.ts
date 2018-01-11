import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RuntimeContentComponent} from './runtime-content/runtime-content.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    RuntimeContentComponent
  ],
  exports: [
    RuntimeContentComponent
  ]
})
export class RuntimeModule {
}
