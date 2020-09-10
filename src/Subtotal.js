import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import {getbasketTotal} from "./reducer"
function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
const price=[]
const getPrices=(item)=>{
    return price.push(item.price)
}
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {}
              {console.log(basket.map(getPrices))}
              Subtotal ({basket?.length} items):<strong>{value}</strong>
            </p>
            <small className="subtotal-gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getbasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
