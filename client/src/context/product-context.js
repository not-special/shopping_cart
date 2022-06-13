import axios from "axios";
import { createContext, useReducer } from "react";

export const ProductContext = createContext()

const productReducer = (state, action) => {
  switch (action.type) {
    case "PRODUCTS_RECEIVED": {
      return action.payload
    } default: {
      return state
    }
  }
}

export const fetchProduct = async (dispatch) => {
  const { data } = await axios.get("/api/products");
  dispatch({ type: "PRODUCTS_RECEIVED", payload: data })
}

export const ProductProvider = ({ children }) => {
  const [products, dispatch] = useReducer(productReducer, []);

  return (
    <ProductContext.Provider value={{ products, dispatch }}>
      {children}
    </ProductContext.Provider>
  )
}
