/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable object-shorthand */
/* eslint-disable object-curly-newline */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable padded-blocks */

import React from 'react';
import PropTypes from 'prop-types';
import { Grid, TextField } from '@material-ui/core';
import ComboEmpresa from 'src/views/empresa/ComboEmpresa';

const FormularioContaCorrente = ({ contaCorrente, handleBlur, handleChange }) => {

  return (
    <>
      <Grid item md={5} xs={12}>
        <ComboEmpresa
          name="contaCorrente.bancoEmpNum"
          size="small"
          label="Banco"
          valor={contaCorrente.bancoEmpNum}
          url="banco"
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
      </Grid>
      <Grid item md={1} xs={12}>
        <TextField
          fullWidth
          helperText=""
          label="Agência"
          margin="normal"
          name="contaCorrente.agencia"
          onBlur={handleBlur}
          onChange={handleChange}
          variant="outlined"
          size="small"
          value={contaCorrente.agencia}
        />
      </Grid>
      <Grid item md={2} xs={12}>
        <TextField
          fullWidth
          helperText=""
          label="Conta Corrente"
          margin="normal"
          name="contaCorrente.conta"
          onBlur={handleBlur}
          onChange={handleChange}
          variant="outlined"
          size="small"
          value={contaCorrente.conta}
        />
      </Grid>
      <Grid item md={2} xs={12}>
        <TextField
          fullWidth
          helperText=""
          label="Chave PIX"
          margin="normal"
          name="contaCorrente.chavePix"
          onBlur={handleBlur}
          onChange={handleChange}
          variant="outlined"
          size="small"
          value={contaCorrente.chavePix}
        />
      </Grid>
    </>
  );

};

export default FormularioContaCorrente;
