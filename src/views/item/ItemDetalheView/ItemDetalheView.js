/* eslint-disable linebreak-style */
/* eslint-disable padded-blocks */
/* eslint-disable react/prop-types */
import React from 'react';
import { useParams } from 'react-router-dom';
import {
  Card, CardContent, Typography, CardActionArea, CardMedia,
  Grid, makeStyles, Container, IconButton, Box, TextField
} from '@material-ui/core';
import Page from 'src/components/Page';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { adicionarItem } from 'src/store/pedidoReducer';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  media: {
    height: 100,
  },
}));

const ItemDetalheView = (props) => {

  const classes = useStyles();
  const { id } = useParams();

  function _adicionarItem() {
    console.log('Adicionando item');
    props.adicionarItem();
  }

  return (
    <Page className={classes.root} title="Cliente">
      <Container maxWidth={false}>
        <Grid item md={8} xs={12}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia className={classes.media} image="/static/images/products/product_2.png" title="Fita de Cetim" />
              <CardMedia image="/static/images/products/product_2.png" title="Contemplative Reptile" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h1">
                  FITA DE CETIM
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {id}
                </Typography>
              </CardContent>
            </CardActionArea>
            <Grid container>
              <IconButton color="primary">
                <RemoveCircleIcon />
              </IconButton>
              <Box alignItems="center" alignSelf="center">
                <TextField size="small" variant="outlined" />
              </Box>
              <IconButton color="primary" onClick={_adicionarItem}>
                <AddCircleOutlinedIcon />
              </IconButton>
            </Grid>
          </Card>
        </Grid>
      </Container>
    </Page>
  );
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  adicionarItem,
}, dispatch);

export default connect(undefined, mapDispatchToProps)(ItemDetalheView);
