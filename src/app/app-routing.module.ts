import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {AppCardComponent} from './dynamic-card/app-card/app-card.component';
import {RuntimeContentComponent} from './runtime/runtime-content/runtime-content.component';
import {AppCompComponent} from './dynamic-comp/app-comp/app-comp.component';
import {AppFormComponent} from './reactive-form/app-form/app-form.component';
import {AppDynamicFormComponent} from './dynamic-form/app-dynamic-form/app-dynamic-form.component';

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'dynamic-card', component: AppCardComponent},
  {path: 'runtime-content', component: RuntimeContentComponent},
  {path: 'dynamic-comp', component: AppCompComponent},
  {path: 'reactive-form', component: AppFormComponent},
  {path: 'dynamic-form', component: AppDynamicFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
