const products = (state = [], action) => {
  switch (action.type) {
    case "PRODUCTS_RECEIVED": {
      return action.payload
    }
    case "PRODUCT_ADDED": {
      return state.concat(action.payload)
    }
    case "PRODUCT_REMOVED": {
      return state.filter(product => product._id !== action.payload)
    }
    case "PRODUCT_UPDATED": {
      return state.map(product => product._id ===  action.payload._id ? action.payload : product)
    }
    default: {
      return state
    }
  }
}

export default products;
