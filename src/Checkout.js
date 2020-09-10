import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Spring } from "react-spring/renderprops";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout-left">
        <img
          className="checkout-ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423592668_.jpg"
        />
        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout-title">Your Shopping Basket</h2>
          <Spring
            from={{ opacity: 0, marginTop: 500 }}
            to={{ opacity: 1, marginTop: 0 }}
            config={{duration:350}}
          >
            {(props) => (
              <div style={props}>
                {" "}
                {basket.map((item) => (
                  <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                  />
                ))}
              </div>
            )}
          </Spring>
        </div>
      </div>
      <div className="checkout-right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
