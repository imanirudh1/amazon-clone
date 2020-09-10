import React from "react";
import "./CheckoutProduct.css";
import {useStateValue} from "./StateProvider"
function CheckoutProduct({ title, rating, price, image, id }) {
    const [{basket},dispatch]=useStateValue();
    const removeFromBasket=()=>{
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id 
            }
            )
    }
  return (
    <div className="checkout-product">
      <img className="checkout-product-img" src={image} />
      <div className="checkout-product-info">
        <p className="checkout-title">{title}</p>
        <p className="checkout-price">{price}</p>
        <div className="checkout-rating">
          {Array(rating)
            .fill()
            .map(() => (
              <p>
                <img
                  className="star"
                  src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/google/263/star_2b50.png"
                />
              </p>
            ))}
        </div>
        <button onClick={removeFromBasket} >Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
