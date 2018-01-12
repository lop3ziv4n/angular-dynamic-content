import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ItemsArrayComponent} from '../items-array/items-array.component';

@Component({
  selector: 'app-nested-form',
  templateUrl: './nested-form.component.html',
  styleUrls: ['./nested-form.component.css']
})
export class NestedFormComponent implements OnInit {

  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    // build the form model
    this.myForm = this.fb.group({
      items: ItemsArrayComponent.buildItems()
    });
  }

  submit() {
    console.log('Reactive Form submitted: ', this.myForm);
    alert('Reactive Form submitted: ' + JSON.stringify(this.myForm.getRawValue()));
  }

}
