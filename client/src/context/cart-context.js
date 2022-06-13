import { createContext, useState } from "react";
import cartService from '../services/cart_items'

export const CartContext = createContext()

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

export const addCartItem = async (items, setItems, productId, updateProduct, dispatch) => {
  const { data }  = await cartService.add(productId)
  setItems(mergeNewItem(data.item, items))
  await updateProduct(dispatch, data.product._id, data.product)
}

export const fetchItems = async (setItems) => {
  const data = await cartService.getAll()
  setItems(data)
}

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  return (
    <CartContext.Provider value={{ items, setItems }}>
      {children}
    </CartContext.Provider>
  )
}
