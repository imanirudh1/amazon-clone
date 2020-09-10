import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header-logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>
      <div className="header-search">
        <input className="header-search-input" type="text" />
        <SearchIcon className="header-search-icon" />
      </div>
      <div className="header-nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header-option">
            <span className="header-option-line-one">{user?`Hey ${user.email}`:'Hello Guest'}</span>
            <span className="header-option-line-two">{user?'Sign Out':'Sign In'}</span>
          </div>
        </Link>
        <div className="header-option">
          <span className="header-option-line-one">Return</span>
          <span className="header-option-line-two">& orders</span>
        </div>
        <div className="header-option">
          <span className="header-option-line-one">Your</span>
          <span className="header-option-line-two">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header-basket">
            <ShoppingBasketIcon />
            <span className="header-option-line-two header-basket-count">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
