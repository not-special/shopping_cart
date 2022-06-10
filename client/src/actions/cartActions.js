import products from "../services/products"

export const cartItemAdded = (cartItem) => {
  return { type: "CART_ITEM_ADDED", payload: cartItem }
}

export const cartItemsRemoved = () => {
  return { type: "CART_ITEMS_REMOVED", payload: null}
}

export const cartItemsReceived = (data) => {
  return { type: "CART_ITEMS_RECEIVED", payload: data }
}
