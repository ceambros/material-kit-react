/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-undef */
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  AppBar,
  Badge,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  makeStyles
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
// import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';
// import Logo from 'src/components/Logo';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { withStyles } from '@material-ui/core/styles';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SvgIcon from '@material-ui/core/SvgIcon';

const useStyles = makeStyles(() => ({
  root: {},
  avatar: {
    width: 60,
    height: 60
  }
}));

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

const TopBar = ({ className, onMobileNavOpen, ...props }) => {
  const classes = useStyles();
  // const [notifications] = useState([]);

  const StyledBadge = withStyles((theme) => ({
    badge: {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }))(Badge);

  return (
    <AppBar className={clsx(classes.root, className)} elevation={0} {...props}>
      <Toolbar>
        <RouterLink to="/">
          {/* <Logo /> */}
          <HomeIcon style={{ fontSize: 40 }} />
        </RouterLink>
        <Box flexGrow={1} />
        <Hidden mdDown>
          <IconButton aria-label="cart">
            <StyledBadge badgeContent={props.pedido.itens.length} color="primary">
              <ShoppingCartIcon />
            </StyledBadge>
          </IconButton>
          {/* <IconButton color="inherit">
            <Badge badgeContent={notifications.length} color="primary" variant="dot">
              <NotificationsIcon />
            </Badge>
          </IconButton> */}
          <IconButton color="inherit">
            <InputIcon />
          </IconButton>
        </Hidden>
        <Hidden lgUp>
          <IconButton color="inherit" onClick={onMobileNavOpen}>
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func
};

const mapStateToProps = (state) => ({
  pedido: state.pedidoRedux.pedido,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);
