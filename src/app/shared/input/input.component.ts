import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'mt-input-container',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, AfterContentInit {


  @ContentChild(NgModel) model: NgModel;

  input: any;

  @Input() label: String;
  @Input() errorMessage: String;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    if (this.model) {
      this.input = this.model;
    } else {
      throw new Error('Esse componente precisa ser utilizado com uma diretiva ngModel');
    }
  }

  hasSuccess(): boolean {
    return this.input.valid &&(this.input.dirty || this.input.touched);
  }

  hasError(): boolean {
    return this.input.invalid &&(this.input.dirty || this.input.touched);
  }

}