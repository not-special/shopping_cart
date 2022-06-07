import React from "react";
import Header from "./Header";
import ProductList from "./ProductList";
import ProductAddForm from "./ProductAddForm"
import { useState, useEffect } from "react";
import db from "../services/db_query"

/*
header
  > cart details
products list
  > product
    > display product
    > edit product
new product form

TODO:
Tim
- edit product
- delete product
Miles
- add product to cart
- checkout cart

*/

const App = () => {
  const [ inventory, setInventory ] = useState([]);
  const [ cart, setCart ] = useState([]);

  useEffect(() => { //initial get of Products
    const fetchProducts = async () => {
      const products = await db.getProducts();
      setInventory(products);
    }
    fetchProducts();
  }, []);

  useEffect(() => { //initial get of Cart
    const fetchCart = async () => {
      const cart = await db.getCartItems();
      setCart(cart);
    }
    fetchCart();
  }, []);

  const handleNewProduct = async (newProd) => {
    try {
      const addedProd = await db.addNewProduct(newProd)
      const newInventory = [...inventory, addedProd]
      setInventory(newInventory)
    } catch(e) {
      console.error(e)
    }
  }

  return (
    <div id="app">
      <Header cart={cart}/>
      <main>
        <ProductList inventory={inventory} />
        <ProductAddForm onSubmitHandler={handleNewProduct}/>
      </main>
    </div>
  );
};

export default App;
