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
  

  const toggleProductFormVisibility = () => {
    setProductFormVisible(!productFormVisible)
  }

  const handleDeleteProduct = (id) => {
    productService 
      .remove(id)
      .then((response) => {
        setProducts(products.filter(product => product._id !== id));
      })
  }

  // const handleAddProduct = (product) => {
  //   productService
  //     .add(product)
  //     .then(response => {
  //       setProducts(products.concat(response.data))
  //     })
  // }

  const handleUpdateProduct = (id, changedProduct) => {
    productService 
      .update(id, changedProduct)
      .then((response) => {
        setProducts(products.map(product => product._id === id ? response : product));
      })
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

  const handleAddCartItem = (id) => {
    cartItemService
      .add({"productId": id})
      .then(response => {
        setCartItems(mergeNewItem(response.data.item))
        setProducts(products.map(product => product._id === id ? response.data.product : product))
      })
  }

	const handleCheckout = () => {
		cartItemService
			.deleteAll()
			.then(response => {
				setCartItems([]);
			})
	}

  const productsWithInventory = () => {
    return products.filter(product => product.quantity > 0)
  }

	return (
    <div id="app">
      <header>
        <h1>The Shop!</h1>
        <Cart items={cartItems} onCheckout={handleCheckout}/>
      </header>
      <main>
        <ProductListing products={productsWithInventory()} onDeleteProduct={handleDeleteProduct} onUpdateProduct={handleUpdateProduct} onAddCartItem={handleAddCartItem}/>
        <AddProductForm toggleVisibility={toggleProductFormVisibility} visible={productFormVisible} />
      </main>
    </div>
  );
};

export default App;
