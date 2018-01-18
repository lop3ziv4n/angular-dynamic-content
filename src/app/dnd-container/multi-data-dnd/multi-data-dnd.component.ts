import { Component, OnInit } from '@angular/core';
import {Container} from '../models/container'
import {Item} from '../models/item'

@Component({
  selector: 'app-multi-data-dnd',
  templateUrl: './multi-data-dnd.component.html',
  styleUrls: ['./multi-data-dnd.component.css']
})
export class MultiDataDndComponent implements OnInit {

  dragOperation: boolean = false;

  containers: Container[] = [
    {
      id: 1,
      name: 'Container 1',
      items: [{name: '1'}, {name: '2'}]
    },
    {
      id: 2,
      name: 'Container 2',
      items: [{name: '3'}, {name: '4'}]
    },
    {
      id: 3,
      name: 'Container 3',
      items: [{name: '4'}, {name: '5'}]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
