/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  TextField,
  InputAdornment,
  SvgIcon,
  makeStyles
} from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';

const useStyles = makeStyles(() => ({
  root: {},
}));

const PesquisaItem = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Box mt={3}>
        <Box maxWidth={500}>
          <TextField
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SvgIcon fontSize="small" color="action">
                    <SearchIcon />
                  </SvgIcon>
                </InputAdornment>
              )
            }}
            placeholder="Busca de produtos"
            variant="outlined"
          />
        </Box>
      </Box>
    </div>
  );
};

PesquisaItem.propTypes = {
  className: PropTypes.string
};

export default PesquisaItem;
