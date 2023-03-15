import React from "react";
import './Header.css'
import {AiOutlineSearch} from 'react-icons/ai';
import {BsCart2} from 'react-icons/bs'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
const Header = () => {
  return (
    <div className="header">
      <img
        className="header_logo"
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="logo"
      />

      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <AiOutlineSearch className="header__searchIcon"/>
      </div>

      <div className="header_nav">
        <div className="header_option">
            <span className="header__optionLineOne">Hello</span>
            <span className="header__optionLineTwo">Sign In</span>

        </div>

        <div className="header_option">
        <span className="header__optionLineOne">Returns</span>
        <span className="header__optionLineTwo">& Orders</span>
        </div>

        <div className="header_option">
        <span className="header__optionLineOne">Your</span>
        <span className="header__optionLineTwo">Prime</span>
        </div>
      </div>
      <div className="header_optionBasket">
        <ShoppingBasketIcon/>
        <span className="header__optionLineTwo header_basketCount">0</span>

      </div>


    </div>
  );
};

export default Header;
