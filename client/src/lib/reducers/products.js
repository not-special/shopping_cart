const products = (state = [], action) => {
  switch (action.type) {
    case "PRODUCTS_RECEIVED": {
      return action.payload
    }
    case "PRODUCT_ADDED": {
      return state.concat(action.payload)
    }
    default: {
      return state
    }
  }
}

export default products;
