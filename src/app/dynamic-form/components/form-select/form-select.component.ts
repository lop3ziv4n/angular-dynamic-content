import {Component, OnInit} from '@angular/core';
import {Field} from '../../models/field';
import {FieldConfig} from '../../models/field-config';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.css']
})
export class FormSelectComponent implements OnInit, Field {

  config: FieldConfig;
  group: FormGroup;

  constructor() {
  }

  ngOnInit() {
  }

}
