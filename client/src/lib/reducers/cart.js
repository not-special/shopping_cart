const mergeNewItem = (item, cartItems) => {
  let items = [...cartItems]
  let foundItem = false;
  
  items = items.map(i => {
    if (i.productId === item.productId) {
      foundItem = true
      return item
    } else {
      return i
    }
  })

  if (!foundItem) items = items.concat(item)
  return items
}

const cart = (state = [], action) => {
  switch (action.type) {
    case "CART_ITEM_ADDED": {
      return mergeNewItem(action.payload.item, state)
    }
    case "CART_ITEMS_REMOVED": {
      return []
    }
    case "CART_ITEMS_RECEIVED": {
      return action.payload
    }
    default: {
      return state
    }
  }
}

export default cart
