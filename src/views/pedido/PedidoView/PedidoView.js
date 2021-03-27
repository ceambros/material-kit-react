/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import {
  Box, Card, Container, makeStyles, Button, Collapse, Grid, CardContent, TableCell, TableRow, TableHead, Table, TableBody
} from '@material-ui/core';
import Page from 'src/components/Page';
import { Alert } from '@material-ui/lab';
import { mostrarMensagem } from 'src/store/mensagensReducer';
import {
  recuperarGrupos, recuperarEmbalagens, recuperarCores, recuperarItens
} from 'src/store/itensReducer';
import { recuperarPedidos } from 'src/store/pedidoReducer';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PesquisaItem from 'src/views/item/PesquisaItem';
import data from 'src/views/item/data';
import PedidoItemCard from 'src/views/pedido/PedidoItemCard';
import ItemFiltro from 'src/views/item/ItemFiltro';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { map } from 'lodash';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
}));

const PedidoView = (props) => {
  const formik = useFormik({
    initialValues: {
      itens: props.itens,
      pedidos: props.pedidos
    },
    onSubmit: (values) => {
      try {
        console.log('Submetendo formulario');
        // props.cadastrarCliente(values, props.mostrarMensagem)
        //   .then((response) => {
        //     console.log(`resposta => ${response}`);
        //   });
      } catch (e) {
        console.log(e);
      }
    },
    enableReinitialize: true,
    // validationSchema:
    //   Yup.object().shape({
    //     cnpj: Yup.string()
    //       .max(14, 'Máximo de 14 caracteres')
    //       .required('Campo cnpj é obrigatório')
    //       .test('teste_cnpj', 'cnpj inválido', (value) => { console.log(`chamou a validação ${value}`); return false; }),
    //     ie: Yup.string().required('Campo ie é obrigatório'),
    //     franquia: Yup.string().required('Campo franquia é obrigatório'),
    //     nome: Yup.string().required('Campo nome é obrigatório'),
    //   })
  });

  useEffect(() => {
    props.recuperarGrupos(props.mostrarMensagem);
    props.recuperarEmbalagens(props.mostrarMensagem);
    props.recuperarCores(props.mostrarMensagem);
    props.recuperarItens(props.mostrarMensagem);
    props.recuperarPedidos(props.mostrarMensagem);
  }, []);

  const classes = useStyles();

  return (
    <Page className={classes.root} title="Cliente">
      <Container maxWidth={false}>
        <Box mb={2}>
          <Button color="primary" variant="contained">
            Visualizar Carrinho
          </Button>
        </Box>
        <Collapse in={props.visible} onClose={props.esconderMensagem}>
          <Box mt={2}>
            <Card padding={3}>
              <Alert severity={props.severity}>
                {props.mensagem}
              </Alert>
            </Card>
          </Box>
        </Collapse>
        <Grid container>
          <Grid item md={2} xs={12}>
            <Card padding={2}>
              <CardContent>
                <Box mt={1} mb={2}>
                  <PesquisaItem />
                </Box>
                <Box mb={1}>
                  <ItemFiltro grupos={props.grupos} embalagens={props.embalagens} cores={props.cores} />
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={8} xs={12}>
            <Box>
              <Card>
                <CardContent>
                  <Grid container spacing={2}>
                    {
                      formik.values.itens.map((item) => (
                        <PedidoItemCard key={item.num} titulo={item.titulo} descricao={item.descricao} urlImagem="/static/images/products/product_2.png" codigo={item.num} />
                      ))
                    }
                  </Grid>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        </Grid>

        <PerfectScrollbar>
          <Box minWidth={1050}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell>
                    Nome
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {formik.values.pedidos.slice(0, formik.values.pedidos.lenght).map((pedido) => (
                  <TableRow hover key={pedido.num}>
                    { pedido.itens.slice(0, pedido.itens.lenght).map((item) => (
                      <TableCell padding="checkbox">
                        {`${pedido.num} - ${item.itemNome}`}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </PerfectScrollbar>

      </Container>
    </Page>
  );
};

const mapStateToProps = (state) => ({
  mensagem: state.mensagemRedux.mensagem,
  visible: state.mensagemRedux.visible,
  severity: state.mensagemRedux.severity,
  grupos: state.itemRedux.grupos,
  embalagens: state.itemRedux.embalagens,
  cores: state.itemRedux.cores,
  itens: state.itemRedux.itens,
  pedidos: state.pedidoRedux.pedidos
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  mostrarMensagem,
  recuperarGrupos,
  recuperarEmbalagens,
  recuperarCores,
  recuperarItens,
  recuperarPedidos
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PedidoView);
