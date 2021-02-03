/* eslint-disable linebreak-style */

const ESTADO_INICIAL = {
  cidade: 'Araraquara',
};

export const ACTIONS = {
  RECUPEAR_LOCALIZACAO: 'RECUPEAR_LOCALIZACAO'
};

export function localizacaoReducer(state = ESTADO_INICIAL, action) {
  console.log(`executando o recucer ${action.type} - ${state}`);

  switch (action.type) {
    case ACTIONS.RECUPEAR_LOCALIZACAO:
      return {
        ...state, cidade: action.ciddade
      };
    default:
      return state;
  }
}
