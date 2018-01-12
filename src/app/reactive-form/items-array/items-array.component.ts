import {Component, Input, OnInit} from '@angular/core';
import {FormArray} from '@angular/forms';
import {ItemControlComponent} from '../item-control/item-control.component';
import {ItemsValidators} from './items-validators';

@Component({
  selector: 'app-items-array',
  templateUrl: './items-array.component.html',
  styleUrls: ['./items-array.component.css']
})
export class ItemsArrayComponent implements OnInit {

  @Input()
  public itemsFormArray: FormArray;

  constructor() {
  }

  ngOnInit() {
  }

  addItem() {
    this.itemsFormArray.push(ItemControlComponent.buildItem(''));
  }

  static buildItems() {
    return new FormArray([
        ItemControlComponent.buildItem('aaa'),
        ItemControlComponent.buildItem('')],
      ItemsValidators.minQuantitySum(300));
  }
}
