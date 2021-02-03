/* eslint-disable linebreak-style */
const ESTADO_INICIAL = {
  mensagem: 'Olá',
  mostrarMensagem: false,
  severity: 'success'
};

export const ACTIONS = {
  MOSTRAR_MENSAGEM: 'MENSAGENS_MOSTRAR',
  ESCONDER_MENSAGEM: 'MENSAGENS_ESCONDER'
};

export function mensagemReducer(state = ESTADO_INICIAL, action) {
  switch (action.type) {
    case ACTIONS.MOSTRAR_MENSAGEM:
      return {
        ...state, mensagem: action.mensagem, severity: action.severity, mostrarMensagem: true
      };
    case ACTIONS.ESCONDER_MENSAGEM:
      return { ...state, mensagem: '', mostrarMensagem: false };
    default:
      return state;
  }
}

export function mostrarMensagem(mensagem, severity) {
  return {
    type: ACTIONS.MOSTRAR_MENSAGEM,
    mensagem,
    severity
  };
}

export function esconderMensagem() {
  return {
    type: ACTIONS.ESCONDER_MENSAGEM
  };
}
