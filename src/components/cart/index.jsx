import React, { Component } from 'react'

class Cart extends Component {
  render() {
    const { count,totalPrice } = this.props
    const {cartList} = this.props.cart

    return (
      <div>
        <p>i`m a cart</p>
        <p> book count { count }</p>
        <p> final price { totalPrice } $ </p>
        <small>book in cart</small>
        <ul style={{ margin: 0,padding : 0 }}>
          { !cartList.length ? "empty": cartList.map( (book,index) => {
            return <li key={index}>{ book.author }</li>
          }) }
        </ul>
      </div>
    )
  }
}

export default Cart