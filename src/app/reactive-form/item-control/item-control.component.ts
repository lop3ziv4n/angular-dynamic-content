import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-item-control',
  templateUrl: './item-control.component.html',
  styleUrls: ['./item-control.component.css']
})
export class ItemControlComponent implements OnInit {

  @Input()
  public index: number;

  @Input()
  public item: FormGroup;

  @Output()
  public removed: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
  }

  static buildItem(val: string) {
    return new FormGroup({
      name: new FormControl(val, Validators.required),
      quantity: new FormControl(100)
    });
  }

}
