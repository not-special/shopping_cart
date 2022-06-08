import { React, useState, useEffect } from "react";
import ProductListing from "./ProductListing";
import Cart from "./Cart";
import AddProductForm from "./AddProductForm";
import data from "../lib/data.js"
import productService from '../services/products'
import cartItemService from '../services/cart_items'

const App = () => {
	const [products, setProducts] = useState([]);
  const [productFormVisible, setProductFormVisible] = useState(false);
  const [cartItems, setCartItems] = useState([])
  
  const getProducts = () => {
    productService
      .getAll()
      .then(initialProducts => {
        setProducts(initialProducts)
      })
  }
  useEffect(getProducts, [])

  const toggleProductFormVisibility = () => {
    setProductFormVisible(!productFormVisible)
  }

  const handleDeleteProduct = (id) => {
    productService 
      .remove(id)
      .then((response) => {
        console.log('response for delete:', response);
        setProducts(products.filter(product => product._id !== id));
      })
  }

  const handleAddProduct = (product) => {
    productService
      .add(product)
      .then(response => {
        setProducts(products.concat(response.data))
      })
  }

  const handleUpdateProduct = (id, changedProduct) => {
    productService 
      .update(id, changedProduct)
      .then((response) => {
        setProducts(products.map(product => product._id === id ? response : product));
      })
  }

  const handleGetCartItems = () => {
    cartItemService
      .getAll()
      .then(cartItems => {
        setCartItems(cartItems)
      })
  }

  const handleAddCartItem = (id) => {
    cartItemService
      .add({"productId": id})
      .then(response => {
        console.log('handleCartItem response: ', response)
        setCartItems(cartItems.concat(response.data.item))
      })
  }

	const handleCheckout = () => {
		cartItemService
			.deleteAll()
			.then(response => {
				setCartItems([]);
			})
	}

	return (
    <div id="app">
      <header>
        <h1>The Shop!</h1>
        <Cart items={cartItems} onCheckout={handleCheckout}/>
      </header>
      <main>
        <ProductListing products={products} onDeleteProduct={handleDeleteProduct} onUpdateProduct={handleUpdateProduct} onAddCartItem={handleAddCartItem}/>
        <AddProductForm toggleVisibility={toggleProductFormVisibility} visible={productFormVisible} onAddProduct={handleAddProduct}/>
      </main>
    </div>
  );
};

export default App;
