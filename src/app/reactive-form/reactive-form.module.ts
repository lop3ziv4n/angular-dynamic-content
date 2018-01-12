import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppFormComponent} from './app-form/app-form.component';
import {NestedFormComponent} from './nested-form/nested-form.component';
import {ItemsArrayComponent} from './items-array/items-array.component';
import {ItemControlComponent} from './item-control/item-control.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppFormComponent,
    NestedFormComponent,
    ItemsArrayComponent,
    ItemControlComponent
  ],
  exports: [
    AppFormComponent
  ]
})
export class ReactiveFormModule {
}
