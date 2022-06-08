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
      setInventory([...inventory, addedProd])
    } catch(e) {
      console.error(e)
    }
  }

  const handleEditProduct = async (updatedProduct, id) => {
    try {
      const result = await db.editProduct(updatedProduct, id);
      const updatedInventory = [...inventory];
      updatedInventory.splice(updatedInventory.findIndex(item => item._id === result._id),1,result);
      setInventory(updatedInventory);
    } catch (e) {
      console.error(e);
    }
  }

  const handleDeleteProduct = async (id) => {
    try {
      const result = await db.deleteProduct(id);
      if (!result) {
        const updatedInventory = inventory.filter(item => item._id !== id);
        setInventory(updatedInventory);
      }
    } catch(e) {
      console.error(e);
    }
  }

  const handleAddToCart = async (item) => {
    try {
      const added = await db.addItemToCart({ productId: item._id });
      if (added) {
        const tempCart = cart.filter(item => item._id !== added.item._id)
        setCart([...tempCart, added.item]);
        setInventory(inventory.map(product => {
          if (product._id === item._id) {
            product.quantity -= 1;
          }
          return product
        }))
      }
    } catch(e) {
      console.error(e);
    }
  }

  const handleCheckoutCart = async () => {
    try {
      await db.checkoutCart();
      setCart([]);
    } catch(e) {
      console.error(e);
    }
  }

  return (
    <div id="app">
      <Header cart={cart} onCheckoutCart={handleCheckoutCart}/>
      <main>
        <ProductList 
          inventory={inventory} 
          onEdit={handleEditProduct}
          onDelete={handleDeleteProduct}
          onAddToCart={handleAddToCart}
          />
        <ProductAddForm onSubmitHandler={handleNewProduct}/>
      </main>
    </div>
  );
};

export default App;
