/* eslint-disable linebreak-style */
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
  Button,
  Collapse
} from '@material-ui/core';
import { useFormik } from 'formik';
import { Alert } from '@material-ui/lab';
import ComboFranquia from '../ComboFranquiaView';

const FormularioClienteView = (props) => {
  const formik = useFormik({
    initialValues: {
      codigo: props.cliente.codigo,
      cnpj: props.cliente.cnpj,
      ie: props.cliente.ie,
      franquia: props.cliente.franquia,
      nome: props.cliente.nome,
      email: props.cliente.email,
      senha: props.cliente.senha,
      contraSenha: props.cliente.contraSenha,
      telefone: props.cliente.telefone,
      celular: props.cliente.celular,
      razaoSocial: props.cliente.razaoSocial,
      cep: props.cliente.cep,
      endereco: props.cliente.endereco,
      bairro: props.cliente.bairro,
      numero: props.cliente.numero,
      complemento: props.cliente.complemento
    },
    onSubmit: (values) => {
      props.cadastrarCliente(values);
    },
    enableReinitialize: true,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Container maxWidth={false}>
        {/* <Toolbar /> */}
        <Box mt={1}>
          <Box mb={3}>
            <Typography color="textPrimary" variant="h2">
              Cliente -
              {' '}
              {formik.values.codigo}
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              Crie um novo cliente
            </Typography>
          </Box>
          <Collapse in={props.openDialog} onClose={props.esconderMensagem}>
            <Alert severity={props.severity}>
              {props.mensagem}
            </Alert>
          </Collapse>
          <Grid container spacing={1}>
            <Grid item md={4} xs={12}>
              <TextField
                fullWidth
                helperText=""
                label="Cnpj"
                margin="normal"
                name="cnpj"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                variant="outlined"
                size="small"
                value={formik.values.cnpj}
              />
            </Grid>
            <Grid item md={4} xs={12}>
              <TextField
                fullWidth
                helperText=""
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
              <ComboFranquia name="franquia" onChange={formik.handleChange} size="small" />
            </Grid>
            <Grid item md={4} xs={12}>
              <TextField
                fullWidth
                helperText=""
                label="Nome"
                margin="normal"
                name="nome"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                variant="outlined"
                size="small"
                value={formik.values.nome}
              />
            </Grid>
            <Grid item md={4} xs={12}>
              <TextField
                fullWidth
                helperText=""
                label="Email"
                margin="normal"
                name="email"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type="email"
                variant="outlined"
                size="small"
                value={formik.values.email}
              />
            </Grid>
            <Grid item md={2} xs={12}>
              <TextField
                fullWidth
                helperText=""
                label="Senha"
                margin="normal"
                name="senha"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type="password"
                variant="outlined"
                size="small"
                value={formik.values.senha}
              />
            </Grid>
            <Grid item md={2} xs={12}>
              <TextField
                fullWidth
                helperText=""
                label="Contra Senha"
                margin="normal"
                name="contraSenha"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type="password"
                variant="outlined"
                size="small"
                value={formik.values.contraSenha}
              />
            </Grid>
            <Grid item md={4} xs={12}>
              <TextField
                fullWidth
                helperText=""
                label="Telefone"
                margin="normal"
                name="telefone"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                variant="outlined"
                size="small"
                value={formik.values.telefone}
              />
            </Grid>
            <Grid item md={4} xs={12}>
              <TextField
                fullWidth
                helperText=""
                label="Celular"
                margin="normal"
                name="celular"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                variant="outlined"
                size="small"
                value={formik.values.celular}
              />
            </Grid>
            <Grid item md={4} xs={12}>
              <TextField
                fullWidth
                helperText=""
                label="Razão Social"
                margin="normal"
                name="razaoSocial"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                variant="outlined"
                size="small"
                value={formik.values.razaoSocial}
              />
            </Grid>
            <Grid item md={4} xs={12}>
              <TextField
                fullWidth
                helperText=""
                label="CEP"
                margin="normal"
                name="cep"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                variant="outlined"
                size="small"
                value={formik.values.cep}
              />
            </Grid>
            <Grid item md={4} xs={12}>
              <TextField
                fullWidth
                helperText=""
                label="Endereço"
                margin="normal"
                name="endereco"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                variant="outlined"
                size="small"
                value={formik.values.endereco}
              />
            </Grid>
            <Grid item md={4} xs={12}>
              <TextField
                fullWidth
                helperText=""
                label="Bairro"
                margin="normal"
                name="bairro"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                variant="outlined"
                size="small"
                value={formik.values.bairro}
              />
            </Grid>
            <Grid item md={4} xs={12}>
              <TextField
                fullWidth
                helperText=""
                label="Numero"
                margin="normal"
                name="numero"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                variant="outlined"
                size="small"
                value={formik.values.numero}
              />
            </Grid>
            <Grid item md={4} xs={12}>
              <TextField
                fullWidth
                helperText=""
                label="Complemento"
                margin="normal"
                name="complemento"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                variant="outlined"
                size="small"
                value={formik.values.complemento}
              />
            </Grid>
            <Grid item md={4} xs={12}>
              <Box my={2}>
                <Button
                  color="primary"
                  fullWidth
                  type="submit"
                  variant="contained"
                >
                  Salvar
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
