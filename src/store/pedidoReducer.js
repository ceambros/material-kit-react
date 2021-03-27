/* eslint-disable linebreak-style */
import axios from 'axios';
import { getBearerToken } from 'src/utils/Data';

const http = axios.create({ baseURL: 'http://localhost:8080' });
const _authorization = getBearerToken;

const ESTADO_INICIAL = {
  pedido: {
    itens: [
      { codigo: 1 },
    ],
  },
  pedidos: []
};

export const PEDIDO_REDUCER_ACTIONS = {
  ADICIONAR_ITEM: 'ADICIONAR_ITEM',
  RECUPERAR_PEDIDOS: 'RECUPERAR_PEDIDOS'
};

export function pedidoReducer(state = ESTADO_INICIAL, action) {
  switch (action.type) {
    case PEDIDO_REDUCER_ACTIONS.ADICIONAR_ITEM:
      console.log(`executando o recucer ${action.type}`);
      return {
        ...state, pedido: action.pedido
      };
    case PEDIDO_REDUCER_ACTIONS.RECUPERAR_PEDIDOS:
      console.log(`executando o recucer ${action.type}`);
      return {
        ...state, pedidos: action.pedidos
      };
    default:
      return state;
  }
}

export function adicionarItem() {
//   return (dispatch) => {
//     dispatch({
//       type: PEDIDO_REDUCER_ACTIONS.ADICIONAR_ITEM,
//       pedido: ESTADO_INICIAL
//     });
//   };

  return {
    type: PEDIDO_REDUCER_ACTIONS.ADICIONAR_ITEM,
    pedido: {
      itens: [
        { codigo: 1 },
        { codigo: 1 },
        { codigo: 1 },
      ],
    }
  };
}

export function recuperarPedidos(mostrarMensagem) {
  return (dispatch) => {
    http.get('/pedido', {
      headers: {
        'content-type': 'application/json',
        Authorization: _authorization
      }
    }).then((response) => {
      console.log(response.data);
      dispatch({
        type: PEDIDO_REDUCER_ACTIONS.RECUPERAR_PEDIDOS,
        pedidos: response.data
      });
    }).catch((erro) => {
      mostrarMensagem(`Erro ao recuperar os pedidos => ${erro.message}`, 'error');
    });
  };
}
