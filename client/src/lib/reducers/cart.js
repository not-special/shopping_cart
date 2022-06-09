const cart = (state = [], action) => {
  switch (action.type) {
    case "CART_ITEM_ADDED": {
      // TODO: update a row if that item is already in the cart!
      console.log("cart reducer action.payload: ", action.payload)
      return state.concat(action.payload.item)
      // STEP 2: update product (i.e. reduce inventory displayed)
    }
    default: {
      return state
    }
  }
}

export default cart
