import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as cartActions from '../actions/cart';


import Cart from '../components/cart';
// import uniqBy from 'lodash/uniqBy';

const mapStateToProps = ({ cart }) => ({
  cart,
  count : cart.cartList.length,
  totalPrice: cart.cartList.reduce( (total,book) => +total + +book.price,0)
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(cartActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cart);