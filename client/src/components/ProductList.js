import Product from "./Product";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "../services/db_query";
import { productsReceived } from "../actions/productActions";

const ProductList = ({ onAddToCart }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    const fetchProducts = async () => {
      const data  = await db.getProducts();
      // dispatch({type: "PRODUCTS_RECEIVED", payload: data})
      dispatch(productsReceived(data));
    };
    fetchProducts();
  }, [dispatch]);

  console.log(products);
  // const handleEditProduct = async (updatedProduct, id) => {
  //   try {
  //     const result = await db.editProduct(updatedProduct, id);
  //     const updatedInventory = [...inventory];
  //     updatedInventory.splice(updatedInventory.findIndex(item => item._id === result._id),1,result);
  //     setInventory(updatedInventory);
  //   } catch (e) {
  //     console.error(e);
  //   }
  // }

  // const handleDeleteProduct = async (id) => {
  //   try {
  //     const result = await db.deleteProduct(id);
  //     if (!result) {
  //       const updatedInventory = inventory.filter(item => item._id !== id);
  //       setInventory(updatedInventory);
  //     }
  //   } catch(e) {
  //     console.error(e);
  //   }
  // }

  // const handleAddToCart = async (item) => {
  //   try {
  //     const added = await db.addItemToCart({ productId: item._id });
  //     if (added) {
  //       const tempCart = cart.filter(item => item._id !== added.item._id)
  //       setCart([...tempCart, added.item]);
  //       setInventory(inventory.map(product => {
  //         if (product._id === item._id) {
  //           product.quantity -= 1;
  //         }
  //         return product
  //       }))
  //     }
  //   } catch(e) {
  //     console.error(e);
  //   }
  // }



  return (
    <div className="product-listing">
      <h2>Products</h2>
        {products.map(item => 
          <Product 
            key={item._id.toString()} 
            item={item} 
            onAddToCart={onAddToCart}
          />)
        }   
    </div>
  )
}

export default ProductList;