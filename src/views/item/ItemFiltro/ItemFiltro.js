/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  Accordion, AccordionDetails, Typography, AccordionSummary, Checkbox
} from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const ItemFiltro = (props) => {
  return (
    <>
      <Accordion label="Tipo">
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Tipo</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            {props.grupos.map((grupo) => (
              <FormControlLabel key={grupo.num} label={grupo.descrAbrev} control={<Checkbox key={grupo.num} />} />
            ))}
          </FormGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion label="Embalagem">
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Embalagem</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            {props.embalagens.map((embalagem) => (
              <FormControlLabel key={embalagem.num} label={embalagem.descrAbrev} control={<Checkbox key={embalagem.num} />} />
            ))}
          </FormGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion label="Cor">
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Cor</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            {props.cores.map((cor) => (
              <FormControlLabel key={cor.codigo} label={cor.descricao} control={<Checkbox key={cor.codigo} />} />
            ))}
          </FormGroup>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default ItemFiltro;
