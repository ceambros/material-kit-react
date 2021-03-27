/* eslint-disable linebreak-style */
import { combineReducers } from 'redux';
import { clienteReducer } from './clientesReducer';
import { mensagemReducer } from './mensagensReducer';
import { itensReducer } from './itensReducer';
import { pedidoReducer } from './pedidoReducer';

const mainReducer = combineReducers({
  mensagemRedux: mensagemReducer,
  clienteRedux: clienteReducer,
  itemRedux: itensReducer,
  pedidoRedux: pedidoReducer
});

export default mainReducer;
