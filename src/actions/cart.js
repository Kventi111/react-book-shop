export const addToCart = cart => ({
  type : "ADD__CART",
  payload : cart
})

export const removeFromCart = id => ({
  type: 'REMOVE_FROM_CART',
  payload: id,
});