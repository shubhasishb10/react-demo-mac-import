import React, { useContext } from 'react';

import Card from '../UI/Card';
import './FavoriteItem.css';
import { ProductsContext } from '../../context/products-context';

const FavoriteItem = props => {

  const toggleFav = useContext(ProductsContext).toogleFav

  const handleClick = () => toggleFav(props.id)

  return (
    <Card style={{ marginBottom: '1rem' }}>
      <div className="favorite-item">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
      <button onClick={handleClick}>
        Un-Favorite
      </button>
    </Card>
  );
};

export default FavoriteItem;
