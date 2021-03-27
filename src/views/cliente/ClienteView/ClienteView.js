/* eslint-disable linebreak-style */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable object-curly-newline */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable react/destructuring-assignment */

import React, { useEffect } from 'react';
import { Box, Card, Container, makeStyles, Button, Collapse } from '@material-ui/core';
import Page from 'src/components/Page';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { recuperarClientes, mostrarTelaCadastro, cadastrarCliente, alterarEndereco, selecionarCliente, criarNovoCliente } from 'src/store/clientesReducer';
import { mostrarMensagem } from 'src/store/mensagensReducer';
import { Alert } from '@material-ui/lab';
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
    props.recuperarClientes(props.mostrarMensagem);
  }, []);

  const alterarMostrarCadastro = (valor) => {
    props.mostrarTelaCadastro(valor);
  };

  const _selecionarCliente = (cliente) => {
    // const clienteSelecionado = props.clientes.find((obj) => obj.empNum === cliente.empNum);
    try {
      props.selecionarCliente(cliente, props.mostrarMensagem)
        .then((response) => {
          alterarMostrarCadastro(true);
        });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Page
      className={classes.root}
      title="Cliente"
    >
      <Container maxWidth={false}>
        {!props.mostrarCadastro
          ? (
            <Button color="primary" variant="contained" onClick={() => { props.criarNovoCliente(); }}>
              Cadastrar Novo Cliente
            </Button>
          )
          : (
            <Button color="primary" variant="contained" onClick={() => { alterarMostrarCadastro(false); }}>
              Voltar
            </Button>
          )}
        <Collapse in={props.visible} onClose={props.esconderMensagem}>
          <Box mt={3}>
            <Card padding={3}>
              <Alert severity={props.severity}>
                {props.mensagem}
              </Alert>
            </Card>
          </Box>
        </Collapse>
        {!props.mostrarCadastro
          ? (
            <Box mt={3}>
              <Card padding={3}>
                <TableClienteView clientes={props.clientes} selecionarCliente={_selecionarCliente} />
              </Card>
            </Box>
          )
          : (
            <div>
              <Box mt={3}>
                <Card padding={3}>
                  <FormularioClienteView
                    cadastrarCliente={props.cadastrarCliente}
                    cliente={props.cliente}
                    alterarEndereco={props.alterarEndereco}
                    mostrarMensagem={props.mostrarMensagem}
                    mensagem={props.mensagem}
                    visible={props.visible}
                    severity={props.severity}
                    novoCliente={props.novoCliente}
                  />
                </Card>
              </Box>
            </div>
          )}
      </Container>
    </Page>
  );
};

const mapStateToProps = (state) => ({
  cliente: state.clienteRedux.cliente,
  clientes: state.clienteRedux.clientes,
  novoCliente: state.clienteRedux.novoCliente,
  mostrarCadastro: state.clienteRedux.mostrarCadastro,
  mensagem: state.mensagemRedux.mensagem,
  visible: state.mensagemRedux.visible,
  severity: state.mensagemRedux.severity
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  recuperarClientes,
  mostrarTelaCadastro,
  criarNovoCliente,
  cadastrarCliente,
  selecionarCliente,
  alterarEndereco,
  mostrarMensagem
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ClienteView);
