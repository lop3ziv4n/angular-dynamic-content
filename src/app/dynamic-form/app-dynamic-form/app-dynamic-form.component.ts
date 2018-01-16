import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {DynamicFormComponent} from '../containers/dynamic-form/dynamic-form.component';
import {FieldConfig} from '../models/field-config';
import {Validators} from '@angular/forms';

@Component({
  selector: 'app-app-dynamic-form',
  templateUrl: './app-dynamic-form.component.html',
  styleUrls: ['./app-dynamic-form.component.css']
})
export class AppDynamicFormComponent implements OnInit, AfterViewInit {

  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;

  config: FieldConfig[] = [
    {
      type: 'input',
      label: 'Full name',
      name: 'name',
      placeholder: 'Enter your name',
      validation: [Validators.required, Validators.minLength(4)]
    },
    {
      type: 'select',
      label: 'Favourite Food',
      name: 'food',
      options: ['Pizza', 'Hot Dogs', 'Knakworstje', 'Coffee'],
      placeholder: 'Select an option',
      validation: [Validators.required]
    },
    {
      type: 'button',
      label: 'Submit',
      name: 'submit'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    let previousValid = this.form.valid;
    this.form.changes.subscribe(() => {
      if (this.form.valid !== previousValid) {
        previousValid = this.form.valid;
        this.form.setDisabled('submit', !previousValid);
      }
    });

    this.form.setDisabled('submit', true);
    this.form.setValue('name', '');
  }

  submit(value: { [name: string]: any }) {
    console.log(value);
    alert('Reactive Form submitted: ' + JSON.stringify(value));
  }

}
