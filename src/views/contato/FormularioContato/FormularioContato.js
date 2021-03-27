/* eslint-disable linebreak-style */
/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */

import { TextField, Grid } from '@material-ui/core';
import React from 'react';

const FormularioContato = ({ contato, handleBlur, handleChange, nome, label }) => {
  return (
    <Grid item md={2} xs={12}>
      <TextField
        fullWidth
        helperText=""
        label={label}
        margin="normal"
        name={nome}
        onBlur={handleBlur}
        onChange={handleChange}
        variant="outlined"
        size="small"
        value={contato.valor}
      />
    </Grid>
  );
};

export default FormularioContato;
