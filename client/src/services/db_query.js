import axios from "axios";
const productURL = '/api/products';
const cartURL = '/api/cart';

const getProducts = () => {
  const req = axios.get(productURL);
  return req.then(res => res.data);
};

const getCartItems = () => {
  const req = axios.get(cartURL);
  return req.then(res => res.data);
}

const dbServices = {
  getProducts,
  getCartItems
}

export default dbServices;
