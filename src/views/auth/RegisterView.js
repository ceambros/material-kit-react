/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
// import { Link as RouterLink, useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import axios from 'axios';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Box,
  Button,
  // Checkbox,
  Container,
  FormHelperText,
  // Link,
  TextField,
  Typography,
  makeStyles,
  Collapse
} from '@material-ui/core';
import Page from 'src/components/Page';

import { Alert } from '@material-ui/lab';
import {
  esconderMensagem,
  mostrarMensagem
} from '../../store/mensagensReducer';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const RegisterView = (props) => {
  const classes = useStyles();
  // const navigate = useNavigate();

  useEffect(() => {
    props.esconderMensagem();
  }, []);

  const http = axios.create({
    baseURL: 'http://localhost:8080'
  });

  return (
    <Page
      className={classes.root}
      title="Criar novo usuário"
    >
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container maxWidth="sm">
          <Formik
            initialValues={{
              email: '',
              firstName: '',
              lastName: '',
              senha: '',
              password2: ''
              // ,policy: false
            }}
            validationSchema={
              Yup.object().shape({
                email: Yup.string().email('Precisa ser um email válido').max(255).required('Campo email é obrigatório'),
                firstName: Yup.string().max(255).required('Campo nome é obrigatório'),
                lastName: Yup.string().max(255).required('Campo sobrenome é obrigatório'),
                senha: Yup.string().max(255).required('Campo senha é obrigatório'),
                password2: Yup.string().max(255).required('Campo confirmar senha é obrigatório')
                // ,policy: Yup.boolean().oneOf([true], 'This field must be checked')
              })
            }
            onSubmit={(values, { setSubmitting }) => {
              http.post('/usuario', values, {
                // headers: { 'x-tenant-id': localStorage.getItem('email_usuario_logado') }
                headers: {
                  'content-type': 'application/json',
                  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRleC1BUEkiLCJzdWIiOiJnaXRleCIsImlhdCI6MTYxMTk1MDk0OCwiZXhwIjoxNjEyMDM3MzQ4fQ.2QXOBWkxl3CCVs1ya-5qAeCG5keu0Dr6cmq4CJCOXm8'
                },
              }).then((response) => {
                props.mostrarMensagem('Usuário cadastrado com sucesso', 'success');
                setSubmitting(false);
                // navigate('/app/dashboard', { replace: true });
              }).catch((erro) => {
                props.mostrarMensagem('Erro:'.concat(JSON.stringify(erro.message)), 'error');
                setSubmitting(false);
              });
            }}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values
            }) => (
              <form onSubmit={handleSubmit}>
                <Box mb={3}>
                  <Typography
                    color="textPrimary"
                    variant="h2"
                  >
                    Criar nova conta
                  </Typography>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="body2"
                  >
                    Use seu email para criar a nova conta
                  </Typography>
                </Box>
                <Collapse in={props.openDialog} onClose={props.esconderMensagem}>
                  <Alert severity={props.severity}>
                    {props.mensagem}
                  </Alert>
                </Collapse>
                <TextField
                  error={Boolean(touched.firstName && errors.firstName)}
                  fullWidth
                  helperText={touched.firstName && errors.firstName}
                  label="Nome"
                  margin="normal"
                  name="firstName"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.firstName}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.lastName && errors.lastName)}
                  fullWidth
                  helperText={touched.lastName && errors.lastName}
                  label="Sobrenome"
                  margin="normal"
                  name="lastName"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.lastName}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.email && errors.email)}
                  fullWidth
                  helperText={touched.email && errors.email}
                  label="Email"
                  margin="normal"
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="email"
                  value={values.email}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.senha && errors.senha)}
                  fullWidth
                  helperText={touched.senha && errors.senha}
                  label="Senha"
                  margin="normal"
                  name="senha"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="password"
                  value={values.senha}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.password2 && errors.password2)}
                  fullWidth
                  helperText={touched.password2 && errors.password2}
                  label="Confirme a Senha"
                  margin="normal"
                  name="password2"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="password"
                  value={values.password2}
                  variant="outlined"
                />
                <Box
                  alignItems="center"
                  display="flex"
                  ml={-1}
                >
                  {/* <Checkbox
                    checked={values.policy}
                    name="policy"
                    onChange={handleChange}
                  />
                  <Typography
                    color="textSecondary"
                    variant="body1"
                  >
                    I have read the
                    {' '}
                    <Link
                      color="primary"
                      component={RouterLink}
                      to="#"
                      underline="always"
                      variant="h6"
                    >
                      Terms and Conditions
                    </Link>
                  </Typography> */}
                </Box>
                {Boolean(touched.policy && errors.policy) && (
                  <FormHelperText error>
                    {errors.policy}
                  </FormHelperText>
                )}
                <Box my={2}>
                  <Button
                    color="primary"
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Salvar
                  </Button>
                </Box>

                {/* <Typography
                  color="textSecondary"
                  variant="body1"
                >
                  Have an account?
                  {' '}
                  <Link
                    component={RouterLink}
                    to="/login"
                    variant="h6"
                  >
                    Sign in
                  </Link>
                </Typography> */}
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </Page>
  );
};

const mapStateToProps = (state) => ({
  mensagem: state.mensagemRedux.mensagem,
  openDialog: state.mensagemRedux.mostrarMensagem,
  severity: state.mensagemRedux.severity
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  esconderMensagem,
  mostrarMensagem
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RegisterView);
