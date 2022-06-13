import axios from "axios";
import { createContext, useReducer } from "react";
import productService from '../services/products'

export const ProductContext = createContext()

const productReducer = (state, action) => {
  switch (action.type) {
    case "PRODUCTS_RECEIVED": {
      return action.payload
		} case "PRODUCT_REMOVED" : {
			return state.filter(product => product._id !== action.payload);
		} default: {
      return state
    }
  }
}

export const fetchProducts = async (dispatch) => {
  const data = await productService.getAll()
  dispatch({ type: "PRODUCTS_RECEIVED", payload: data })
}

export const deleteProduct = async (dispatch, id) => {
	await productService.remove(id)
	dispatch({type: "PRODUCT_REMOVED", payload: id})
}

export const ProductProvider = ({ children }) => {
  const [products, dispatch] = useReducer(productReducer, []);

  return (
    <ProductContext.Provider value={{ products, dispatch }}>
      {children}
    </ProductContext.Provider>
  )
}
