import { Component, OnInit } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store';
import { INCREMENTAR_CONTADOR, DECREMENTAR_CONTADOR } from '../actions';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  msg: string;

  constructor(private ngredux: NgRedux<IAppState>) { }

  ngOnInit(): void {
    this.ngredux.subscribe(() => {
      const state = this.ngredux.getState();
      this.msg = state.mensaje;
    });
  }

  handleClick(incrementar) {
    if (incrementar) {
      this.ngredux.dispatch({ type: INCREMENTAR_CONTADOR });
    } else {
      this.ngredux.dispatch({ type: DECREMENTAR_CONTADOR });
    }
  }

}
