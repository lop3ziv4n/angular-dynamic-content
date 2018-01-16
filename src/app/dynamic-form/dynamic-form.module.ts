import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FormSelectComponent } from './components/form-select/form-select.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { FormButtonComponent } from './components/form-button/form-button.component';
import { DynamicFieldDirective } from './directives/dynamic-field.directive';
import { DynamicFormComponent } from './containers/dynamic-form/dynamic-form.component';
import { AppDynamicFormComponent } from './app-dynamic-form/app-dynamic-form.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    FormSelectComponent,
    FormInputComponent,
    FormButtonComponent,
    DynamicFieldDirective,
    DynamicFormComponent,
    AppDynamicFormComponent
  ],
  entryComponents: [
    FormButtonComponent,
    FormInputComponent,
    FormSelectComponent
  ],
  exports: [
    AppDynamicFormComponent
  ]
})
export class DynamicFormModule { }
