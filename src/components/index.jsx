import React, { Component } from "react";

import Cart from '../container/cart'
import "./header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="header-block">
        <div className="header-grid">
         <div className="header__logo">book shop</div>
         <div className="header__cart">
            <Cart />
         </div>
        </div>
      </div>
    );
  }
}
