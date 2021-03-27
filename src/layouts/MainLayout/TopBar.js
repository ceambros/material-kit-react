import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  AppBar,
  Toolbar,
  makeStyles
} from '@material-ui/core';
// import Logo from 'src/components/Logo';
import SvgIcon from '@material-ui/core/SvgIcon';

const useStyles = makeStyles(({
  root: {},
  toolbar: {
    height: 64
  }
}));

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

const TopBar = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <AppBar
      className={clsx(classes.root, className)}
      elevation={0}
      {...rest}
    >
      <Toolbar className={classes.toolbar}>
        <RouterLink to="/">
          {/* <Logo /> */}
          <HomeIcon style={{ fontSize: 40 }} />
        </RouterLink>
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string
};

export default TopBar;
