import React, { useContext } from "react";
import { useDispatch } from "react-redux";

import Card from "../UI/Card";
import "./ProductItem.css";
import { ProductsContext } from "../../context/products-context";

const ProductItem = (props) => {
  //const dispatch = useDispatch();

  const toggleFav = useContext(ProductsContext).toogleFav;

  const toggleFavHandler = () => {
    toggleFav(props.id);
  };

  const disabled = props.isFav;

  return (
    <Card style={{ marginBottom: "1rem" }}>
      <div className="product-item">
        <h2 className={props.isFav ? "is-fav" : ""}>{props.title}</h2>
        <p>{props.description}</p>
        <button
          className={!props.isFav ? "button-outline" : " disabled "}
          disabled={disabled}
          onClick={toggleFavHandler}
        >
          {!props.isFav ? "Favorite" : "Added to Favorite"}
        </button>
      </div>
    </Card>
  );
};

export default ProductItem;
