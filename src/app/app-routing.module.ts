import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {AppCardComponent} from './dynamic-card/app-card/app-card.component';
import {RuntimeContentComponent} from './runtime/runtime-content/runtime-content.component';

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'dynamic-card', component: AppCardComponent},
  {path: 'runtime-content', component: RuntimeContentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
