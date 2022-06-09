import { React, useState, useEffect } from "react";
import ProductListing from "./ProductListing";
import Cart from "./Cart";
import AddProductForm from "./AddProductForm";
import cartItemService from '../services/cart_items'

const App = () => {
	const [products, setProducts] = useState([]);
  const [productFormVisible, setProductFormVisible] = useState(false);
  // const [cartItems, setCartItems] = useState([])
  

  const toggleProductFormVisibility = () => {
    setProductFormVisible(!productFormVisible)
  }

	// const handleCheckout = () => {
	// 	cartItemService
	// 		.deleteAll()
	// 		.then(response => {
	// 			setCartItems([]);
	// 		})
	// }

  const productsWithInventory = () => {
    return products.filter(product => product.quantity > 0)
  }

	return (
    <div id="app">
      <header>
        <h1>The Shop!</h1>
        {/* <Cart items={cartItems} onCheckout={handleCheckout}/> */}
        <Cart onCheckout={() => {}}/>
      </header>
      <main>
        <ProductListing products={productsWithInventory()} />
        <AddProductForm toggleVisibility={toggleProductFormVisibility} visible={productFormVisible} />
      </main>
    </div>
  );
};

export default App;
