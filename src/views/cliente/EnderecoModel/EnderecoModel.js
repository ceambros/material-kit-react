/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable padded-blocks */
/* eslint-disable no-unused-vars */
class EnderecoModel {

  constructor(cep, logradouroDescr, logradouroNumero, logradouroCompl, logradouroBairro, cidadeNome, estado) {
    this.cep = cep;
    this.logradouroDescr = logradouroDescr;
    this.logradouroNumero = logradouroNumero;
    this.logradouroCompl = logradouroCompl;
    this.logradouroBairro = logradouroBairro;
    this.cidadeNome = cidadeNome;
    this.estado = estado;
  }

}

export default EnderecoModel;
