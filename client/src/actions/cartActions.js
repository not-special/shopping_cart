export const cartItemAdded = (cartItem) => {
  return { type: "CART_ITEM_ADDED", payload: cartItem }
}

export const cartItemsRemoved = () => {
  return { type: "CART_ITEMS_REMOVED", payload: null}
}

export const cartItemsReceived = (cartItems) => {
  return { type: "CART_ITEMS_RECEIVED", payload: cartItems }
}
