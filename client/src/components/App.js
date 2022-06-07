import React from "react";
import Header from "./Header";
import ProductList from "./ProductList";
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
*/

const App = () => {
  const [ inventory, setInventory ] = useState([]);
  const [ cart, setCart ] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await db.getProducts();
      setInventory(products);
    }
    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchCart = async () => {
      const cart = await db.getCartItems();
      setCart(cart);
    }
    fetchCart();
  }, []);

  

  return (
    <div id="app">
      <Header cart={cart}/>
      <main>
        <ProductList inventory={inventory} />
      </main>
    </div>
  );
};

export default App;
