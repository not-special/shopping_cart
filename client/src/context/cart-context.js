import { createContext, useState } from "react";
import cartService from '../services/cart_items'

export const CartContext = createContext()

export const addCartItem = async (cartItems, setCartItems, productId, updateProduct, dispatch) => {
  const { data }  = await cartService.add(productId)
  setCartItems(cartItems.concat(data.item))
  await updateProduct(dispatch, data.product._id, data.product)
}

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  )
}
