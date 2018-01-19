import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MultiDataDndComponent} from './multi-data-dnd/multi-data-dnd.component';
import {DndModule} from 'ng2-dnd';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DndModule.forRoot()
  ],
  declarations: [
    MultiDataDndComponent
  ],
  exports: [
    MultiDataDndComponent
  ]
})
export class DndContainerModule {
}
