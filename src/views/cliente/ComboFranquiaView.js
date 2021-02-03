/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
import React, { useEffect, useState } from 'react';
import { TextField } from '@material-ui/core';
import axios from 'axios';

function ComboFranquia(props) {
  const [empresas, setListaEmpresas] = useState([]);

  function recuperarEmpresas() {
    const http = axios.create({
      baseURL: 'http://localhost:8080'
    });

    http.get('/cliente/franquias', {
      headers: {
        'content-type': 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRleC1BUEkiLCJzdWIiOiJnaXRleCIsImlhdCI6MTYxMjI3MTQyNiwiZXhwIjoxNjEyMzU3ODI2fQ.iOR-JkVTA5X2RTs_qCsC0K8xea0eGTJP7S75AD0ZBAE'
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
      label="Franquia"
      name={props.name}
      onChange={props.onChange}
      margin="normal"
      required
      select
      SelectProps={{ native: true }}
      value={props.empresaSelecionada}
      variant="outlined"
      size={props.size}
    >
      <option key="0" value="" />
      {empresas.map((option) => (
        <option
          key={`${option.empresaNum}-${option.num}`}
          value={`${option.empresaNum}-${option.num}`}
        >
          {option.descricao}
        </option>
      ))}
    </TextField>
  );
}

export default ComboFranquia;
