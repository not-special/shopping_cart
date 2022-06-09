import { React, useState, useEffect } from "react";
import ProductListing from "./ProductListing";
import Cart from "./Cart";
import AddProductForm from "./AddProductForm";

const App = () => {
  const [productFormVisible, setProductFormVisible] = useState(false);
  

  const toggleProductFormVisibility = () => {
    setProductFormVisible(!productFormVisible)
  }

	return (
    <div id="app">
      <header>
        <h1>The Shop!</h1>
        <Cart />
      </header>
      <main>
        <ProductListing />
        <AddProductForm toggleVisibility={toggleProductFormVisibility} visible={productFormVisible} />
      </main>
    </div>
  );
};

export default App;
