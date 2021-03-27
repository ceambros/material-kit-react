/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable padded-blocks */
/* eslint-disable no-unused-expressions */
/* eslint-disable max-len */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-constant-condition */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import {
  Box,
  Container,
  Grid,
  TextField,
  Typography,
  Button
} from '@material-ui/core';
import { useFormik } from 'formik';
import { recuperarLocalizacao } from 'src/store/LocalizacaoService';
import FormularioContaCorrente from 'src/views/contacorrente/FormularioContaCorrente';
import FormularioEndereco from 'src/views/endereco/FormularioEndereco';
import FormularioUsuario from 'src/views/usuario/FormularioUsuario';
import FormularioContato from 'src/views/contato/FormularioContato';

const FormularioClienteView = (props) => {

  const formik = useFormik({
    initialValues: {
      empNum: props.cliente.empNum,
      num: props.cliente.num,
      descr: props.cliente.descr,
      descrAbrev: props.cliente.descrAbrev,
      sitAtual: props.cliente.sitAtual,
      cpf: props.cliente.cpf,
      cnpj: props.cliente.cnpj,
      ie: props.cliente.ie,
      usuCad: props.cliente.usuCad,
      endereco: props.cliente.endereco,
      usuario: props.cliente.usuario,
      celular: props.cliente.celular,
      telefoneComercial: props.cliente.telefoneComercial,
      contatoPrincipal: props.cliente.contatoPrincipal,
      contaCorrente: props.cliente.contaCorrente
    },
    onSubmit: (values) => {
      try {
        props.cadastrarCliente(values, props.mostrarMensagem)
          .then((response) => {
            console.log(`resposta => ${response}`);
          });
      } catch (e) {
        console.log(e);
      }
    },
    enableReinitialize: true,

  });

  function _recuperarLocalizacao() {
    return (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        recuperarLocalizacao(event.target.value)
          .then((localizacao) => {
            const clienteAtual = formik.values;
            clienteAtual.endereco.logradouroDescr = localizacao.logradouro;
            clienteAtual.endereco.logradouroBairro = localizacao.bairro;
            clienteAtual.endereco.cidadeNome = localizacao.localidade;
            clienteAtual.endereco.estado = localizacao.uf;
            props.alterarEndereco(clienteAtual);
          });
      }
    };
  }

  function _getLabelBotaoSubmit() {

    if (props.novoCliente) {
      return 'Criar';
    }
    return 'Alterar';
  }

  return (
    <form onSubmit={formik.handleSubmit}>
      <Container maxWidth={false}>
        {/* <Toolbar /> */}
        <Box mt={1}>
          <Box mb={3}>
            <Typography color="textPrimary" variant="h2">
              Cliente
              {' '}
              {formik.values.empNum}
            </Typography>
            {props.novoCliente              
              ? (
                <Typography color="textSecondary" gutterBottom>
                  Crie um novo cliente
                </Typography>
              )
              : (
                <Typography color="textSecondary" gutterBottom>
                  Altere o cliente selecionado
                </Typography>
              )}
          </Box>
          <Grid container spacing={1}>

            <Grid item md={4} xs={12}>
              <TextField
                fullWidth
                error={Boolean(formik.touched.descr && formik.errors.descr)}
                helperText={formik.touched.descr && formik.errors.descr}
                label="Razão Social"
                margin="normal"
                name="descrAbrev"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                variant="outlined"
                size="small"
                required
                value={formik.values.descr}
              />
            </Grid>

            <Grid item md={2} xs={12}>
              <TextField
                fullWidth
                error={false}
                helperText={formik.touched.cnpj && formik.errors.cnpj}
                label="Cpf / Cnpj"
                margin="normal"
                name="cnpj"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                variant="outlined"
                size="small"
                required
                value={formik.values.cnpj}
              />
            </Grid>
            <Grid item md={2} xs={12}>
              <TextField
                fullWidth
                error={Boolean(formik.touched.ie && formik.errors.ie)}
                helperText={formik.touched.ie && formik.errors.ie}
                label="IE"
                margin="normal"
                name="ie"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                variant="outlined"
                size="small"
                value={formik.values.ie}
              />
            </Grid>
            <Grid item md={4} xs={12}>
              <TextField
                fullWidth
                error={Boolean(formik.touched.descrAbrev && formik.errors.descrAbrev)}
                helperText={formik.touched.descrAbrev && formik.errors.descrAbrev}
                label="Nome Fantasia"
                margin="normal"
                name="descr"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                variant="outlined"
                size="small"
                required
                value={formik.values.descrAbrev}
              />
            </Grid>

            <FormularioUsuario
              values={formik.values}
              handleBlur={formik.handleBlur}
              handleChange={formik.handleChange}
            />

            <Grid item md={2} xs={12}>
              <TextField
                fullWidth
                label="Celular"
                margin="normal"
                name="celular.valor"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                variant="outlined"
                size="small"
                value={formik.values.celular.valor}
              />
            </Grid>

            <Grid item md={2} xs={12}>
              <TextField
                fullWidth
                label="Tel. Comercial"
                margin="normal"
                name="telefoneComercial.valor"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                variant="outlined"
                size="small"
                value={formik.values.telefoneComercial.valor}
              />
            </Grid>

            <FormularioContato
              contato={formik.values.contatoPrincipal}
              handleBlur={formik.handleBlur}
              handleChange={formik.handleChange}
              label="Nome do Contato"
              nome="contatoPrincipal.valor"
            />

            <FormularioEndereco
              endereco={formik.values.endereco}
              recuperarLocalizacao={_recuperarLocalizacao}
              handleBlur={formik.handleBlur}
              handleChange={formik.handleChange}
            />

            <FormularioContaCorrente
              contaCorrente={formik.values.contaCorrente}
              handleBlur={formik.handleBlur}
              handleChange={formik.handleChange}
            />

            <Grid item md={2} xs={12}>
              <Box my={2}>
                <Button color="primary" fullWidth type="submit" variant="contained">
                  {_getLabelBotaoSubmit()}
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </form>
  );
};

export default FormularioClienteView;
