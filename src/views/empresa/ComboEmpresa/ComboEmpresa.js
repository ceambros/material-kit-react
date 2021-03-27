/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable padded-blocks */
/* eslint-disable object-curly-newline */
// eslint-disable-next-line linebreak-style
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */

import React, { useEffect, useState } from 'react';
import { getBearerToken } from 'src/utils/Data';
import { TextField } from '@material-ui/core';
import axios from 'axios';

function ComboEmpresa({ label, name, valor, url, handleChange, handleBlur }) {

  const [empresas, setListaEmpresas] = useState([]);
  const _authorization = getBearerToken;

  function recuperarEmpresas() {
    const http = axios.create({
      baseURL: 'http://localhost:8080'
    });

    http.get(`/${url}`, {
      headers: {
        'content-type': 'application/json',
        Authorization: _authorization
      }
    }).then((response) => {
      setListaEmpresas(response.data);
    }).catch((erro) => {
      console.log(erro);
    });
  }

  useEffect(() => {
    recuperarEmpresas();
  }, []);

  return (
    <TextField
      fullWidth
      label={label}
      name={name}
      onBlur={handleBlur}
      onChange={handleChange}
      margin="normal"
      select
      SelectProps={{ native: true }}
      value={valor}
      variant="outlined"
      size="small"
    >
      <option key="0" value="0"> Selecione </option>
      {empresas.map((empresa) => (
        <option
          key={empresa.empNum}
          value={empresa.empNum}
        >
          {empresa.descr}
        </option>
      ))}
    </TextField>
  );
}

export default ComboEmpresa;
