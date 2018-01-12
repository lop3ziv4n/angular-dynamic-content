import {Component, Inject, Injector, OnInit} from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  showName: string;

  constructor(private injector: Injector) {
    this.showName = this.injector.get('showName');
  }

  ngOnInit() {
  }

}
