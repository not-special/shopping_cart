export const cartReceived = (cart) => {
  return { type: "CART_RECEIVED", payload: cart };
}

export const addedToCart = (item) => {
  return { type: "ADDED_TO_CART", payload: item}
}