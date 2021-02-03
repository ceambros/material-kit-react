/* eslint-disable linebreak-style */
/* eslint-disable max-len */
class Cliente {
  constructor(codigo, cnpj, ie, franquia, nome, email, senha, contraSenha, telefone, celular, razaoSocial, cep, endereco, bairro, numero, complemento) {
    this.codigo = codigo;
    this.cnpj = cnpj;
    this.ie = ie;
    this.franquia = franquia;
    this.nome = nome;
    this.email = email;
    this.senha = senha;
    this.contraSenha = contraSenha;
    this.telefone = telefone;
    this.celular = celular;
    this.razaoSocial = razaoSocial;
    this.cep = cep;
    this.endereco = endereco;
    this.bairro = bairro;
    this.numero = numero;
    this.complemento = complemento;
  }
}

export default Cliente;
