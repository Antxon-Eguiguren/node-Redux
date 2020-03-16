import { Component, OnInit } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store';
import { CHANGE_MESSAGE } from '../actions';

@Component({
  selector: 'app-secundario',
  templateUrl: './secundario.component.html',
  styleUrls: ['./secundario.component.css']
})
export class SecundarioComponent implements OnInit {

  cont: number;

  constructor(private ngredux: NgRedux<IAppState>) { }

  ngOnInit(): void {
    this.ngredux.subscribe(() => {
      const state = this.ngredux.getState();
      this.cont = state.contador;
    });
  }

  handleClick() {
    this.ngredux.dispatch({
      type: CHANGE_MESSAGE,
      message: 'Mensaje enviado desde el componente secundario'
    });
  }

}
