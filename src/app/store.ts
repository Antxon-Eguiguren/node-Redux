import { CHANGE_MESSAGE, INCREMENTAR_CONTADOR, DECREMENTAR_CONTADOR, CHANGE_DATOS_PERSONALES } from './actions';
import { tassign } from 'tassign';

export interface IAppState {
    mensaje: string;
    contador: number;
    datosPersonales: {
        nombre: string,
        apellidos: string,
        edad: number
    };
}

export const INITIAL_STATE: IAppState = {
    mensaje: '',
    contador: 0,
    datosPersonales: {
        nombre: '',
        apellidos: '',
        edad: 0
    }
};

export function rootReducer(state, action): IAppState {
    switch (action.type) {
        case CHANGE_MESSAGE: {
            return tassign(state, { mensaje: action.message });
            // return { mensaje: action.message, contador: state.contador };
        }
        case INCREMENTAR_CONTADOR: {
            return tassign(state, { contador: state.contador + 1 });
            // return { mensaje: state.mensaje, contador: state.contador + 1 };
        }
        case DECREMENTAR_CONTADOR: {
            return tassign(state, { contador: state.contador - 1 });
            // return { mensaje: state.mensaje, contador: state.contador - 1 };
        }
        case CHANGE_DATOS_PERSONALES: {
            return tassign(state, { datosPersonales: action.data });
        }
    }
    return state;
}
