/* eslint-disable linebreak-style */
import { combineReducers } from 'redux';
import { clienteReducer } from './clientesReducer';
import { mensagemReducer } from './mensagensReducer';

const mainReducer = combineReducers({
  mensagemRedux: mensagemReducer,
  clienteRedux: clienteReducer
});

export default mainReducer;
