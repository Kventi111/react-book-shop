import React, { Component } from "react";
import { connect } from 'react-redux'

import { addToCart } from '/Users/babaevmagomed/Sites/react/react-book-shop/react-books/src/actions/cart.js'
import './bookItem.css'

class bookItem extends Component {

  add = () => {
    const { _id,title,author,price,addToCart } = this.props
    addToCart({
      _id,
      title,
      author,
      price
    })
  }

  render() {
    const { title, author,price,_id} = this.props;    
    return (  
      <div className="item" id={_id}>
        <div className="item-grid">
          <div className="item__left">
            <div className="item__title">
              { title }
            </div>
            <div className="item__author">
              { author }
            </div>
            <div className="item__price">
              { price } $
            </div>
          </div>
          <div className="item__right">
            <div className="item-control">
              <div className="btn" onClick={this.add}>add to cart</div>
            </div>
          </div>
        </div>
      </div> 
    ); 
  }
}

const mapStateToProps = ({ cart,book }) => ({
  cart
})

const mapDispatchToProps = dispatch => ({
  addToCart : cart => dispatch(addToCart(cart))
})

export default connect(mapStateToProps,mapDispatchToProps)(bookItem)