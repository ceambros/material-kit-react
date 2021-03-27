/* eslint-disable linebreak-style */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-undef */
/* eslint-disable max-len */
/* eslint-disable padded-blocks */

import axios from 'axios';
import { getBearerToken } from 'src/utils/Data';
import Cliente from '../views/cliente/ClienteModel';
import Endereco from '../views/cliente/EnderecoModel';
import Usuario from '../views/cliente/UsuarioModel';
import MeioComunic from '../model/MeioComunicModel';
import Contato from '../model/ContatoModel';
import ContaCorrente from '../model/ContaCorrenteModel';

const ESTADO_INICIAL = {
  clientes: [],
  cliente:
    new Cliente('', '', '', '', '', '', '', '', '', '',
      new Endereco('', '', '', '', '', '', ''),
      new Usuario('', '', ''),
      new MeioComunic('', ''),
      new MeioComunic('', ''),
      new Contato('', ''),
      new ContaCorrente('', '', '', '', '', ''),),
  mostrarCadastro: false,
  novoCliente: true
};

const http = axios.create({ baseURL: 'http://localhost:8080' });
const _authorization = getBearerToken;

export const ACTIONS = {
  ALTERAR_ENDERECO: 'ALTERAR_ENDERECO',
  MOSTRAR_FORMULARIO_CADASTRO: 'MOSTRAR_FORMULARIO_CADASTRO',
  RECUPERAR_CLIENTES: 'RECUPERAR_CLIENTES',
  CADASTRAR: 'CADASTRAR_CLIENTE',
  ALTERAR: 'ALTERAR_CLIENTE',
  LISTAR: 'LISTAR_CLIENTE',
  SELECIONAR_CLIENTE: 'SELECIONAR_CLIENTE',
  CRIAR_NOVO_CLIENTE: 'CRIAR_NOVO_CLIENTE',
};

export function clienteReducer(state = ESTADO_INICIAL, action) {

  switch (action.type) {
    case ACTIONS.ALTERAR_ENDERECO:
      console.log(`executando o recucer ${action.type}`);
      return {
        ...state,
        cliente: action.cliente
      };
    case ACTIONS.MOSTRAR_FORMULARIO_CADASTRO:
      console.log(`executando o recucer ${action.type}`);
      return {
        ...state,
        mostrarCadastro: action.mostrarCadastro,
        novoCliente: false
      };
    case ACTIONS.RECUPERAR_CLIENTES:
      console.log(`executando o recucer ${action.type}`);
      return {
        ...state,
        clientes: action.clientes,
        novoCliente: false
      };
    case ACTIONS.CADASTRAR:
      console.log(`executando o recucer ${action.type}`);
      return {
        ...state,
        cliente: action.cliente,
        novoCliente: false
      };
    case ACTIONS.SELECIONAR_CLIENTE:
      console.log(`executando o recucer ${action.type}`);
      return {
        ...state,
        cliente: action.cliente,
        novoCliente: false
      };
    case ACTIONS.CRIAR_NOVO_CLIENTE:
      console.log(`executando o recucer ${action.type}`);
      return {
        ...state,
        cliente: action.cliente,
        mostrarCadastro: action.mostrarCadastro,
        novoCliente: true
      };

    default:
      return state;
  }
}

export function recuperarClientes(mostrarMensagem) {
  return (dispatch) => {

    http.get('/cliente', {
      headers: {
        'content-type': 'application/json',
        Authorization: _authorization
      }
    }).then((response) => {
      dispatch({
        type: ACTIONS.RECUPERAR_CLIENTES,
        clientes: response.data
      });
    }).catch((erro) => {
      mostrarMensagem(`Erro ao recuperar lista de clientes => ${erro.message}`, 'error');
    });
  };
}

export function selecionarCliente(cliente, mostrarMensagem) {

  return (async (dispatch) => {
    await http.get(`/cliente/${cliente.empNum}/${cliente.unidNum}`, {
      headers: {
        'content-type': 'application/json',
        Authorization: _authorization
      }
    }).then((response) => {
      console.log(response.data);
      dispatch({
        type: ACTIONS.SELECIONAR_CLIENTE,
        cliente: response.data
      });
    }).catch((erro) => {
      mostrarMensagem(`Erro ao cadastrar o cliente => ${erro.message}`, 'error');
    });
  });
}

export function cadastrarCliente(clienteForm, mostrarMensagem) {
  return (async (dispatch) => {
    http.post('/cliente', clienteForm, {
      headers: {
        'content-type': 'application/json',
        Authorization: _authorization
      }
    }).then((response) => {
      console.log(response.data);
      dispatch({
        type: ACTIONS.CADASTRAR,
        cliente: response.data
      });
      mostrarMensagem('Cliente cadastrado com sucesso', 'success');
      // eslint-disable-next-line no-unused-vars
    }).catch((erro) => {
      mostrarMensagem(`Erro ao cadastrar o cliente => ${erro.message}`, 'error');
    });
  });
}

export function criarNovoCliente() {
  return {
    type: ACTIONS.CRIAR_NOVO_CLIENTE,
    cliente:
    new Cliente('', '', '', '', '', '', '', '', '', '',
      new Endereco('', '', '', '', '', '', ''),
      new Usuario('', '', ''),
      new MeioComunic('', ''),
      new MeioComunic('', ''),
      new Contato('', ''),
      new ContaCorrente('', '', '', '', '', ''),),
    mostrarCadastro: true
  };
}

export function mostrarTelaCadastro(mostrarCadastro) {
  return {
    type: ACTIONS.MOSTRAR_FORMULARIO_CADASTRO,
    mostrarCadastro
  };
}

export function alterarEndereco(clienteForm) {
  return {
    type: ACTIONS.ALTERAR_ENDERECO,
    cliente: clienteForm
  };
}
