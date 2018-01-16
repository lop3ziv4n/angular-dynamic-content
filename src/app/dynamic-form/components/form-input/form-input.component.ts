import {Component, OnInit} from '@angular/core';
import {Field} from '../../models/field';
import {FieldConfig} from '../../models/field-config';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent implements OnInit, Field {

  config: FieldConfig;
  group: FormGroup;

  constructor() {
  }

  ngOnInit() {
  }

}
