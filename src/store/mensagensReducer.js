/* eslint-disable linebreak-style */
const ESTADO_INICIAL = {
  mensagem: 'Olá',
  visible: false,
  severity: 'error'
};

export const ACTIONS = {
  MOSTRAR_MENSAGEM: 'MOSTRAR_MENSAGEM',
  ESCONDER_MENSAGEM: 'ESCONDER_MENSAGEM'
};

export function mensagemReducer(state = ESTADO_INICIAL, action) {
  switch (action.type) {
    case ACTIONS.MOSTRAR_MENSAGEM:
      return {
        ...state, mensagem: action.mensagem, severity: action.severity, visible: true
      };
    case ACTIONS.ESCONDER_MENSAGEM:
      return { ...state, mensagem: '', visible: false };
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
