import {Component, OnInit} from '@angular/core';
import {HelloComponent} from '../hello/hello.component';
import {ByeComponent} from '../bye/bye.component';

@Component({
  selector: 'app-app-comp',
  templateUrl: './app-comp.component.html',
  styleUrls: ['./app-comp.component.css']
})
export class AppCompComponent implements OnInit {

  componentData = null;
  value: string;

  constructor() {
  }

  ngOnInit() {
  }

  createHelloComponent() {
    this.componentData = {
      component: HelloComponent,
      inputs: {
        showName: this.value
      }
    };
  }

  createByeComponent() {
    this.componentData = {
      component: ByeComponent,
      inputs: {
        showName: this.value
      }
    };
  }

}
