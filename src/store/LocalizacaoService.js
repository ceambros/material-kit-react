/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import ViaCep from 'node-viacep';

const viacep = new ViaCep({
  type: 'json'
});

export async function recuperarLocalizacao(cep) {
  let dados;
  try {
    await viacep.zipCod.getJson(cep)
      .then((data) => data.json())
      .then((data) => {
        dados = data;
      });
  } catch (e) {
    console.log(e);
  }
  return dados;
}

export default recuperarLocalizacao;
