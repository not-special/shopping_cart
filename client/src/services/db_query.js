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

const addNewProduct = (newProduct) => {
  const req = axios.post(productURL, newProduct);
  return req.then(res => res.data);
}

const editProduct = (updatedProduct, id) => {
  const req = axios.put(`${productURL}/${id}`, updatedProduct);
  return req.then(res => res.data);
}

const deleteProduct = (id) => {
  const req = axios.delete(`${productURL}/${id}`);
  return req.then(res => res.data);
}

const addItemToCart = (item) => {
  const req = axios.post('api/add-to-cart', item);
  return req.then(res => res.data); // returns a cart item object for added item
}

const checkoutCart = () => {
  const req = axios.post('api/checkout');
  return req.then(res => res.data); // returns number of deleted products
}

const dbServices = {
  getProducts,
  getCartItems,
  addNewProduct,
  editProduct,
  deleteProduct,
  addItemToCart,
  checkoutCart
}

export default dbServices;
