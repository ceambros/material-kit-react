/* eslint-disable linebreak-style */

import axios from 'axios';
import Cliente from '../views/cliente/ClienteModel';

const ESTADO_INICIAL = {
  cliente: new Cliente('0', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
  mostrarCadastro: false,
  clientes: [],
};

export const ACTIONS = {
  MOSTRAR_FORMULARIO_CADASTRO: 'MOSTRAR_FORMULARIO_CADASTRO',
  RECUPERAR_CLIENTES: 'RECUPERAR_CLIENTES',
  CADASTRAR: 'CADASTRAR_CLIENTE',
  ALTERAR: 'ALTERAR_CLIENTE',
  LISTAR: 'LISTAR_CLIENTE'
};

export function clienteReducer(state = ESTADO_INICIAL, action) {
  console.log(`executando o recucer ${action.type}`);
  switch (action.type) {
    case ACTIONS.MOSTRAR_FORMULARIO_CADASTRO:
      return {
        ...state, mostrarCadastro: action.mostrarCadastro
      };
    case ACTIONS.RECUPERAR_CLIENTES:
      return {
        ...state, clientes: action.clientes
      };
    case ACTIONS.CADASTRAR:
      return {
        ...state, cliente: action.cliente
      };
    default:
      return state;
  }
}

export function recuperarClientes() {
  return (dispatch) => {
    const http = axios.create({
      baseURL: 'http://localhost:8080'
    });

    http.get('/cliente', {
      headers: {
        'content-type': 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRleC1BUEkiLCJzdWIiOiJnaXRleCIsImlhdCI6MTYxMjI3MTQyNiwiZXhwIjoxNjEyMzU3ODI2fQ.iOR-JkVTA5X2RTs_qCsC0K8xea0eGTJP7S75AD0ZBAE'
      }
    }).then((response) => {
      console.log(response.data);
      dispatch({
        type: ACTIONS.RECUPERAR_CLIENTES,
        clientes: response.data
      });
    }).catch((erro) => {
      console.log(erro);
    });
  };
}

export function cadastrarCliente(clienteForm) {
  console.log(clienteForm);
  return (dispatch) => {
    const http = axios.create({
      baseURL: 'http://localhost:8080'
    });

    http.post('/cliente', clienteForm, {
      headers: {
        'content-type': 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRleC1BUEkiLCJzdWIiOiJnaXRleCIsImlhdCI6MTYxMjI3MTQyNiwiZXhwIjoxNjEyMzU3ODI2fQ.iOR-JkVTA5X2RTs_qCsC0K8xea0eGTJP7S75AD0ZBAE'
      }
    }).then((response) => {
      dispatch({
        type: ACTIONS.CADASTRAR,
        cliente: response.data
      });
    }).catch((erro) => {
      console.log(erro);
    });
  };
}

export function mostrarTelaCadastro(mostrarCadastro) {
  return {
    type: ACTIONS.MOSTRAR_FORMULARIO_CADASTRO,
    mostrarCadastro
  };
}
