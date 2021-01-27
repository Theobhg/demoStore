import React, { useState } from 'react';
import { FavColor } from './styles';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import { formatPrice } from '../../utils/formatPrice';
import { products } from '../../products/products';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginTop: 50,
    padding: 20,
    flexGrow: 1,

  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

function BeardProduct() {

  const [productsData, setProductsData] = useState(products)

  //Troca de favoritado pra não favoritado
  function handleFavorite(id) {
    const products = productsData.map((product =>
      product.id === id
        ? ({ ...product, isFavorite: !product.isFavorite })
        : product
    ))

    setProductsData(products)
  }

  const classes = useStyles();
  const beardProducts = () => productsData.map(product => (
    <Card className={classes.root} key={product.id}>
      <li>
        <h2 style={{ textAlign: 'center' }}>{product.name}</h2>
        <p style={{ textAlign: 'center' }}>{formatPrice(product.price)}</p>
      </li>
      <IconButton onClick={() => handleFavorite(product.id)} aria-label="add to favorites">
        <FavColor toggle={product.isFavorite}>
          <FavoriteIcon onClick={e => product.isFavorite} />
        </FavColor>
      </IconButton>
    </Card>

  ))

  return (
    <div>
      <ul style={{ listStyle: 'none' }}>
        {beardProducts()}
      </ul>
    </div>
  );
}

export default BeardProduct;
