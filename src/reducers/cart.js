const initialState = {
  cartList : []
}

export default (state = initialState,action) =>  {
  switch(action.type) {
    case "ADD__CART":
    return {
      ...state,
      cartList: [...state.cartList, action.payload]
    }
    case 'REMOVE_FROM_CART':
    return {
      ...state,
      cartList: state.items.filter(o => o.id != action.payload),
    };
    default:
      return state
  }
}