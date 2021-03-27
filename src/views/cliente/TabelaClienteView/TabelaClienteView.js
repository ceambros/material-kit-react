/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable padded-blocks */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import {
  TableCell, TableRow, TableHead, Box, Table, TableBody
} from '@material-ui/core';
import PerfectScrollbar from 'react-perfect-scrollbar';
import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const TabelaClienteView = ({ clientes, selecionarCliente }) => {

  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });

  const classes = useStyles();

  return (
    <PerfectScrollbar>
      <Box minWidth={1050}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <StyledTableCell width="300">
                Nome
              </StyledTableCell>
              <StyledTableCell>
                CNPJ
              </StyledTableCell>
              <StyledTableCell width="600">
                Endereço
              </StyledTableCell>
              <StyledTableCell>
                Usuário
              </StyledTableCell>
              <StyledTableCell>
                Data
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {clientes.slice(0, clientes.lenght).map((cliente) => (
              <TableRow hover key={cliente.empNum} onDoubleClick={() => selecionarCliente(cliente)}>
                <TableCell padding="checkbox">
                  {cliente.descr}
                </TableCell>
                <TableCell>
                  {cliente.cnpj}
                </TableCell>
                <TableCell>
                  {cliente.endereco}
                </TableCell>
                <TableCell>
                  {cliente.usuario}
                </TableCell>
                <TableCell>
                  {cliente.dtCad}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {clientes.lenght > 0
          && (
          <Typography variant="button" display="block" gutterBottom>
            Nenhum Registro Encontrado!
          </Typography>
          )}
      </Box>
    </PerfectScrollbar>
  );
};

export default TabelaClienteView;
