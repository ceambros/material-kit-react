/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */

import { TextField, Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

const FormularioMeioComunic = ({ meioComunic, handleBlur, handleChange, nome, label }) => {
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
        value={meioComunic.valor}
      />
    </Grid>
  );
};

FormularioMeioComunic.propTypes = {
  meioComunic: PropTypes.object,
};

export default FormularioMeioComunic;
