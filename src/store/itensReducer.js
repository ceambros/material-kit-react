/* eslint-disable linebreak-style */
/* eslint-disable padded-blocks */

import axios from 'axios';
import { getBearerToken } from 'src/utils/Data';
// import Cliente from '../views/cliente/ClienteModel';

const ESTADO_INICIAL = {
  grupos: [],
  embalagens: [],
  cores: [],
  itens: []
};

const http = axios.create({ baseURL: 'http://localhost:8080' });
const _authorization = getBearerToken;

export const ITENS_REDUCER_ACTIONS = {
  RECUPERAR_GRUPOS: 'RECUPERAR_FILTROS',
  RECUPERAR_EMBALAGENS: 'RECUPERAR_EMBALAGENS',
  RECUPERAR_CORES: 'RECUPERAR_CORES',
  RECUPERAR_ITENS: 'RECUPERAR_ITENS'
};

export function itensReducer(state = ESTADO_INICIAL, action) {
  switch (action.type) {
    case ITENS_REDUCER_ACTIONS.RECUPERAR_GRUPOS:
      console.log(`executando o recucer ${action.type}`);
      return {
        ...state, grupos: action.grupos
      };
    case ITENS_REDUCER_ACTIONS.RECUPERAR_EMBALAGENS:
      console.log(`executando o recucer ${action.type}`);
      return {
        ...state, embalagens: action.embalagens
      };
    case ITENS_REDUCER_ACTIONS.RECUPERAR_CORES:
      console.log(`executando o recucer ${action.type}`);
      return {
        ...state, cores: action.cores
      };
    case ITENS_REDUCER_ACTIONS.RECUPERAR_ITENS:
      console.log(`executando o recucer ${action.type}`);
      return {
        ...state, itens: action.itens
      };
    default:
      return state;
  }
}

export function recuperarGrupos(mostrarMensagem) {
  return (dispatch) => {

    http.get('/item/grupos', {
      headers: {
        'content-type': 'application/json',
        Authorization: _authorization
      }
    }).then((response) => {
      console.log(response.data);
      dispatch({
        type: ITENS_REDUCER_ACTIONS.RECUPERAR_GRUPOS,
        grupos: response.data
      });
    }).catch((erro) => {
      mostrarMensagem(`Erro ao recuperar os filtros de pesquisa dos itens => ${erro.message}`, 'error');
    });
  };
}

export function recuperarEmbalagens(mostrarMensagem) {
  return (dispatch) => {

    http.get('/item/embalagem', {
      headers: {
        'content-type': 'application/json',
        Authorization: _authorization
      }
    }).then((response) => {
      console.log(response.data);
      dispatch({
        type: ITENS_REDUCER_ACTIONS.RECUPERAR_EMBALAGENS,
        embalagens: response.data
      });
    }).catch((erro) => {
      mostrarMensagem(`Erro ao recuperar os filtros de pesquisa dos itens => ${erro.message}`, 'error');
    });
  };
}

export function recuperarCores(mostrarMensagem) {
  return (dispatch) => {

    http.get('/item/cor', {
      headers: {
        'content-type': 'application/json',
        Authorization: _authorization
      }
    }).then((response) => {
      console.log(response.data);
      dispatch({
        type: ITENS_REDUCER_ACTIONS.RECUPERAR_CORES,
        cores: response.data
      });
    }).catch((erro) => {
      mostrarMensagem(`Erro ao recuperar os filtros de pesquisa dos itens => ${erro.message}`, 'error');
    });
  };
}

export function recuperarItens(mostrarMensagem) {
  return (dispatch) => {

    http.get('/item', {
      headers: {
        'content-type': 'application/json',
        Authorization: _authorization
      }
    }).then((response) => {
      console.log(response.data);
      dispatch({
        type: ITENS_REDUCER_ACTIONS.RECUPERAR_ITENS,
        itens: response.data
      });
    }).catch((erro) => {
      mostrarMensagem(`Erro ao recuperar os filtros de pesquisa dos itens => ${erro.message}`, 'error');
    });
  };
}
