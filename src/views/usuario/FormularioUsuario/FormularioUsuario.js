/* eslint-disable linebreak-style */
/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable padded-blocks */

import React from 'react';

import {
  Box,
  Container,
  Grid,
  TextField,
  Typography,
  Button,
  Divider
} from '@material-ui/core';

const FormularioUsuario = ({ values, handleBlur, handleChange }) => {

  return (
    <>
      <Grid item md={4} xs={12}>
        <TextField
          fullWidth
          helperText=""
          label="Email"
          margin="normal"
          name="usuario.login"
          onBlur={handleBlur}
          onChange={handleChange}
          type="email"
          variant="outlined"
          size="small"
          value={values.usuario.login}
        />
      </Grid>
      <Grid item md={2} xs={12}>
        <TextField
          fullWidth
          helperText=""
          label="Senha"
          margin="normal"
          name="usuario.senha"
          onBlur={handleBlur}
          onChange={handleChange}
          type="password"
          variant="outlined"
          size="small"
          value={values.usuario.senha}
        />
      </Grid>
      <Grid item md={2} xs={12}>
        <TextField
          fullWidth
          helperText=""
          label="Contra Senha"
          margin="normal"
          name="contraSenha"
          onBlur={handleBlur}
          onChange={handleChange}
          type="password"
          variant="outlined"
          size="small"
          value={values.contraSenha}
        />
      </Grid>
    </>
  );
};

export default FormularioUsuario;
