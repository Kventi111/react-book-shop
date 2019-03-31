import React, { Component,Fragment } from "react";
import { connect } from 'react-redux'

import { addToCart } from '../../actions/cart'
import './bookItem.css'

import {
  CardWrapper,
  CardHeader,
  CardHeaderIcon,
  CardSection,
  CardSectionTitle,
  CardSectionSubtitle,
  CardIconWrapper,
  CardImgSection,
  CardDescriptionSection,
  CardActionSection,
  CardActionItem
} from './style'

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
      // <div className="item" id={_id}>
      //   <div className="item-grid">
      //     <div className="item__left">
      //       <div className="item__title">
      //         { title }
      //       </div>
      //       <div className="item__author">
      //         { author }
      //       </div>
      //       <div className="item__price">
      //         { price } $
      //       </div>
      //     </div>
      //     <div className="item__right">
      //       <div className="item-control">
      //         <div className="btn" onClick={this.add}>add to cart</div>
      //       </div>
      //     </div>
      //   </div>
      // </div> 
      // <div>
      //   {title}
      // </div>\
      <Fragment>
      <CardWrapper>
        <CardHeader>
          <CardIconWrapper>
            <CardHeaderIcon />
          </CardIconWrapper>
          <CardSection>
            <CardSectionTitle>
              { author }
            </CardSectionTitle>
            <CardSectionSubtitle>
              { price } $
            </CardSectionSubtitle>
          </CardSection>
        </CardHeader>
        <CardImgSection src="https://images.unsplash.com/photo-1553949357-e164b5711492?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
        <CardDescriptionSection>
          {title}
        </CardDescriptionSection>
        <CardActionSection>
          <CardActionItem>
            Добавить в корзину
          </CardActionItem>
        </CardActionSection>
      </CardWrapper>
      </ Fragment>
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