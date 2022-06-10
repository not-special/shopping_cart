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