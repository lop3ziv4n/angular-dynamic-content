import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardComponent} from './card/card.component';
import {AppCardComponent} from './app-card/app-card.component';
import {DynamicComponentService} from './services/dynamic-component.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CardComponent,
    AppCardComponent
  ],
  entryComponents: [
    CardComponent
  ],
  providers: [
    DynamicComponentService
  ],
  exports: [
    AppCardComponent
  ]
})
export class DynamicCardModule {
}
