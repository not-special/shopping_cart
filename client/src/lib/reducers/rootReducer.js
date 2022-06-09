import products from "./products";

const rootReducer = (state = {}, action) => {
  return {
    products: products(state.products, action)
  };
};

export default rootReducer;
