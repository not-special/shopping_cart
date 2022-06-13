import { React, useState, useEffect } from "react";
import ProductListing from "./ProductListing";
import Cart from "./Cart";
import AddProductForm from "./AddProductForm";
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

  const mergeNewItem = (item) => {
    let items = [...cartItems]
    let foundItem = false;
    
    items = items.map(i => {
      if (i.productId === item.productId) {
        foundItem = true
        return item
      } else {
        return i
      }
    })
  
    if (!foundItem) items = items.concat(item)
    return items
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
        <ProductListing />
        <AddProductForm toggleVisibility={toggleProductFormVisibility} visible={productFormVisible} />
      </main>
    </div>
  );
};

export default App;
