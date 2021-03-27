/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
import React from 'react';
import {
  Card, CardContent, Typography, CardActionArea, CardMedia, Grid,
  makeStyles, IconButton, TextField, Box
} from '@material-ui/core';
import PropTypes from 'prop-types';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(1),
    paddingTop: theme.spacing(1)
  },
  media: {
    height: 100,
  },
  botoes: {
    backgroundColor: theme.palette.primary,
    aligment: 'center'
  },
  fieldQuantidade: {
    backgroundColor: theme.dark
  }
}));

const PedidoItemCard = ({
  titulo, descricao, urlImagem, codigo
}) => {
  const classes = useStyles();
  return (
    <Grid item md={4} xs={12} sm={12}>
      <Link to={`/app/itemDetalheView/${codigo}`}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia className={classes.media} image={urlImagem} title="Fita de Cetim" />
            <CardMedia image="/static/images/products/product_2.png" title="Contemplative Reptile" />
            <CardContent>

              {/* <Typography gutterBottom variant="h5" component="h1">
              {titulo}
            </Typography> */}
              <Typography variant="body2" color="textSecondary" component="p">
                {descricao}
              </Typography>
            </CardContent>
          </CardActionArea>
          {/* <Grid container>
          <IconButton color="primary">
            <RemoveCircleIcon />
          </IconButton>
          <Box alignItems="center" alignSelf="center" width={120}>
            <TextField size="small" variant="outlined" />
          </Box>
          <IconButton color="primary">
            <AddCircleOutlinedIcon />
          </IconButton>
        </Grid> */}
        </Card>
      </Link>
    </Grid>

  );
};

PedidoItemCard.propTypes = {
  codigo: PropTypes.number,
  titulo: PropTypes.string,
  descricao: PropTypes.string,
  urlImagem: PropTypes.elementType
};

export default PedidoItemCard;
