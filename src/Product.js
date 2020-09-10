import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
function Product({ title, rating, price, image, id }) {
const [{basket},dispatch]=useStateValue();
  const addToBasket=()=>{
dispatch({
  type:"ADD_TO_BASKET",
  item:{
    id:id,
    title:title,
    image:image,
    price:price,
    rating:rating
  }
})
  }

  return (
    <div className="product">
      <div className="product-info">
        <p>{title}</p>
        <p className="product-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product-rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>
                <img className="star" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/google/263/star_2b50.png" />
              </p>
            ))}
        </div>
      </div>
      <img src={image} />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
