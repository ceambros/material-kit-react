/* eslint-disable linebreak-style */
/* eslint-disable padded-blocks */
/* eslint-disable max-len */

class ClienteModel {

  constructor(empNum, unidNum, descr, descrAbrev, sitAtual, cpf, cnpj, ie, usuCad, dtCad, endereco, usuario, celular, telefoneComercial, contatoPrincipal, contaCorrente) {

    this.empNum = empNum;
    this.unidNum = unidNum;
    this.descr = descr;
    this.descrAbrev = descrAbrev;
    this.sitAtual = sitAtual;
    this.cpf = cpf;
    this.cnpj = cnpj;
    this.ie = ie;
    this.usuario = usuCad;
    this.dtCad = dtCad;
    this.endereco = endereco;
    this.usuario = usuario;
    this.celular = celular;
    this.telefoneComercial = telefoneComercial;
    this.contatoPrincipal = contatoPrincipal;
    this.contaCorrente = contaCorrente;
  }

}

export default ClienteModel;
