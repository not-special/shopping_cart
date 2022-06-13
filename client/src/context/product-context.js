import { createContext, useReducer } from "react";
import productService from '../services/products'

export const ProductContext = createContext()

const productReducer = (state, action) => {
  switch (action.type) {
    case "PRODUCTS_RECEIVED": {
      return action.payload
		} case "PRODUCT_REMOVED" : {
			return state.filter(product => product._id !== action.payload);
		} case "PRODUCT_ADDED": {
      return state.concat(action.payload)
    } case "PRODUCT_UPDATED": {
			return state.map(product => product._id === action.payload._id ? action.payload : product)
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
	dispatch({ type: "PRODUCT_REMOVED", payload: id })
}

export const addProduct = async (dispatch, product) => {
  const { data } = await productService.add(product)
  dispatch({ type: "PRODUCT_ADDED", payload: data })
}

export const updateProduct = async (dispatch, id, changedProduct) => {
	const data = await productService.update(id, changedProduct)
	dispatch({type: "PRODUCT_UPDATED", payload: data})
}

export const ProductProvider = ({ children }) => {
  const [products, dispatch] = useReducer(productReducer, []);

  return (
    <ProductContext.Provider value={{ products, dispatch }}>
      {children}
    </ProductContext.Provider>
  )
}
