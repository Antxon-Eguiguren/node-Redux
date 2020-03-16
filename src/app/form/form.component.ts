import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store';
import { CHANGE_DATOS_PERSONALES } from '../actions';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formulario: FormGroup;

  constructor(private ngredux: NgRedux<IAppState>) {
    this.formulario = new FormGroup({
      nombre: new FormControl(''),
      apellidos: new FormControl(''),
      edad: new FormControl('')
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.ngredux.dispatch({
      type: CHANGE_DATOS_PERSONALES,
      data: this.formulario.value
    });
  }

}
