import { Component, OnInit } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store';
import { CHANGE_MESSAGE } from '../actions';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  cont: number;

  constructor(private ngredux: NgRedux<IAppState>) { }

  ngOnInit(): void {
    this.ngredux.subscribe(() => {
      const state = this.ngredux.getState();
      this.cont = state.contador;
    });
  }

  handleClick() {
    // Envía la acción al store de Redux
    this.ngredux.dispatch({
      type: CHANGE_MESSAGE,
      message: 'Mensaje enviado desde el componente principal'
    });
  }

}
