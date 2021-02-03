/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from 'react';
import {
  Box, Card, Container, makeStyles, Button
} from '@material-ui/core';
import Page from 'src/components/Page';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { recuperarClientes, mostrarTelaCadastro, cadastrarCliente } from 'src/store/clientesReducer';
import TableClienteView from '../TabelaClienteView';
import FormularioClienteView from '../FormularioClienteView';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const ClienteView = (props) => {
  const classes = useStyles();

  useEffect(() => {
    props.recuperarClientes();
  }, []);

  const alterarMostrarCadastro = (valor) => {
    props.mostrarTelaCadastro(valor);
  };

  return (
    <Page
      className={classes.root}
      title="Cliente"
    >
      <Container maxWidth={false}>
        {!props.mostrarCadastro
          ? (
            <Button color="primary" variant="contained" onClick={() => { alterarMostrarCadastro(true); }}>
              Cadastrar Novo Cliente
            </Button>
          )
          : (
            <Button color="primary" variant="contained" onClick={() => { alterarMostrarCadastro(false); }}>
              Voltar
            </Button>
          )}
        {!props.mostrarCadastro
          ? (
            <Box mt={3}>
              <Card padding={3}>
                <TableClienteView clientes={props.clientes} />
              </Card>
            </Box>
          )
          : (
            <Box mt={3}>
              <Card padding={3}>
                <FormularioClienteView cadastrarCliente={props.cadastrarCliente} cliente={props.cliente} />
              </Card>
            </Box>
          )}
      </Container>
    </Page>
  );
};

const mapStateToProps = (state) => ({
  cliente: state.clienteRedux.cliente,
  clientes: state.clienteRedux.clientes,
  mostrarCadastro: state.clienteRedux.mostrarCadastro
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  recuperarClientes,
  mostrarTelaCadastro,
  cadastrarCliente
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ClienteView);
