/* eslint-disable linebreak-style */
/* eslint-disable object-shorthand */
/* eslint-disable object-curly-newline */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable padded-blocks */

import React from 'react';
import PropTypes from 'prop-types';
import { Grid, TextField } from '@material-ui/core';

const FormularioEndereco = ({ endereco, recuperarLocalizacao, handleBlur, handleChange }) => {

  return (
    <>
      <Grid item md={2} xs={12}>
        <TextField
          fullWidth
          error={false}
          helperText=""
          label="CEP"
          margin="normal"
          name="endereco.cep"
          onBlur={handleBlur}
          onChange={handleChange}
          onKeyPress={recuperarLocalizacao()}
          variant="outlined"
          size="small"
          required
          value={endereco.cep}
        />
      </Grid>
      <Grid item md={4} xs={12}>
        <TextField
          fullWidth
          helperText=""
          label="Endereço"
          margin="normal"
          name="endereco.logradouroDescr"
          onBlur={handleBlur}
          onChange={handleChange}
          variant="outlined"
          size="small"
          value={endereco.logradouroDescr}
          disabled
          required
        />
      </Grid>
      <Grid item md={2} xs={12}>
        <TextField
          fullWidth
          helperText=""
          label="Bairro"
          margin="normal"
          name="endereco.logradouroBairro"
          onBlur={handleBlur}
          onChange={handleChange}
          variant="outlined"
          size="small"
          value={endereco.logradouroBairro}
          disabled
          required
        />
      </Grid>
      <Grid item md={2} xs={12}>
        <TextField
          fullWidth
          helperText=""
          label="Cidade"
          margin="normal"
          name="endereco.cidadeNome"
          onBlur={handleBlur}
          onChange={handleChange}
          variant="outlined"
          size="small"
          value={endereco.cidadeNome}
          disabled
          required
        />
      </Grid>
      <Grid item md={2} xs={12}>
        <TextField
          fullWidth
          helperText=""
          label="Estado"
          margin="normal"
          name="endereco.estado"
          onBlur={handleBlur}
          onChange={handleChange}
          variant="outlined"
          size="small"
          value={endereco.estado}
          disabled
          required
        />
      </Grid>
      <Grid item md={2} xs={12}>
        <TextField
          fullWidth
          helperText=""
          label="Numero"
          margin="normal"
          name="endereco.logradouroNumero"
          onBlur={handleBlur}
          onChange={handleChange}
          variant="outlined"
          size="small"
          value={endereco.logradouroNumero}
          required
        />
      </Grid>
      <Grid item md={4} xs={12}>
        <TextField
          fullWidth
          helperText=""
          label="Complemento"
          margin="normal"
          name="endereco.logradouroCompl"
          onBlur={handleBlur}
          onChange={handleChange}
          variant="outlined"
          size="small"
          value={endereco.logradouroCompl}
        />
      </Grid>
    </>
  );
};

FormularioEndereco.propTypes = {
  endereco: PropTypes.object,
  recuperarLocalizacao: PropTypes.func,
  handleBlur: PropTypes.func,
  handleChange: PropTypes.func
};

export default FormularioEndereco;
