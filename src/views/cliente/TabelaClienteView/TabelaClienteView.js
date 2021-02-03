/* eslint-disable linebreak-style */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import {
  TableCell, TableRow, TableHead, Box, Table, TableBody
} from '@material-ui/core';
import PerfectScrollbar from 'react-perfect-scrollbar';
import React from 'react';

const TabelaClienteView = ({ clientes }) => {
  return (
    <PerfectScrollbar>
      <Box minWidth={1050}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                Cnpj
              </TableCell>
              <TableCell>
                Razão Social
              </TableCell>
              <TableCell>
                Email
              </TableCell>
              <TableCell>
                Endereço
              </TableCell>
              <TableCell>
                Celular
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {clientes.slice(0, clientes.lenght).map((cliente) => (
              <TableRow
                hover
                key={cliente.codigo}
              >
                <TableCell padding="checkbox">
                  {cliente.cnpj}
                </TableCell>

                <TableCell>
                  {cliente.nome}
                </TableCell>

                <TableCell>
                  {cliente.email}
                </TableCell>

                <TableCell>
                  {cliente.endereco}
                </TableCell>

                <TableCell>
                  {cliente.celular}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </PerfectScrollbar>

  );
};

export default TabelaClienteView;
