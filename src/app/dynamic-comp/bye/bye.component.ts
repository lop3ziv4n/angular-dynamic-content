import {Component, Injector, OnInit} from '@angular/core';

@Component({
  selector: 'app-bye',
  templateUrl: './bye.component.html',
  styleUrls: ['./bye.component.css']
})
export class ByeComponent implements OnInit {

  showName: string;

  constructor(private injector: Injector) {
    this.showName = this.injector.get('showName');
  }

  ngOnInit() {
  }

}
