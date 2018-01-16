import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FieldConfig} from '../../models/field-config';
import {Field} from '../../models/field';

@Component({
  selector: 'app-form-button',
  templateUrl: './form-button.component.html',
  styleUrls: ['./form-button.component.css']
})
export class FormButtonComponent implements OnInit, Field {

  config: FieldConfig;
  group: FormGroup;

  constructor() {
  }

  ngOnInit() {
  }

}
