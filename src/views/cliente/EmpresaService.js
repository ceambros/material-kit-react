/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
import axios from 'axios';

class EmpresaService {
  http = axios.create({
    baseURL: 'http://localhost:8080'
  });

  getListaDeFranquias = () => {
    http.get('/empresa/franquias', {
      headers: {
        'content-type': 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRleC1BUEkiLCJzdWIiOiJnaXRleCIsImlhdCI6MTYxMTk2Mjg4OSwiZXhwIjoxNjEyMDQ5Mjg5fQ.FoPnR0Ebjp-sOhPg86jgK5ft5d-KVZbTVcqhXkpfmoo'
      }
    }).then((resonse) => {
      console.log(response);
    }).catch((erro) => {
      console.log(erro);
    });
  }
}
