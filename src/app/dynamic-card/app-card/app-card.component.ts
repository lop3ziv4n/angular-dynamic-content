import {Component, ComponentRef, OnDestroy, OnInit, Type, ViewChild, ViewContainerRef} from '@angular/core';
import {DynamicComponentService} from '../services/dynamic-component.service';
import {CardComponent} from '../card/card.component';
import {CardModel} from '../models/card-model';

@Component({
  selector: 'app-app-card',
  templateUrl: './app-card.component.html',
  styleUrls: ['./app-card.component.css']
})
export class AppCardComponent implements OnInit, OnDestroy {

  @ViewChild('target', {read: ViewContainerRef}) vcRef;
  components: ComponentRef<any>[] = [];

  constructor(private dcService: DynamicComponentService) {
  }

  counter = 0
  add() {
    const cardModel: CardModel = {
      name: 'Jorge CAS',
      counter: this.counter ++,
    };

    this.components = this.dcService.createComponent(this.vcRef, CardComponent, cardModel);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.components.forEach(comp => comp.destroy());
  }

}
