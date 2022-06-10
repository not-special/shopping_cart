import { useState } from "react";
import { useDispatch } from "react-redux";
import EditProduct from "./EditProduct";
import { productDeleted, productDecremented } from "../actions/productActions";
import { addedToCart } from "../actions/cartActions";
import db from "../services/db_query"

const Product = ({ item })=> {
  const [ showEdit, setShowEdit ] = useState(false);
  const dispatch = useDispatch();
  
  const toggleEdit = () => {
    setShowEdit(!showEdit)
  }

  const handleDeleteProduct = async () => {
    const id = item._id
    try {
      const result = await db.deleteProduct(id);
      if (!result) {
        dispatch(productDeleted(id))
      }
    } catch(e) {
      console.error(e);
    }
  }

  const addItemToCart = async () => {
    try {
        const added = await db.addItemToCart({ productId: item._id });
        const addedId = added.product._id;
        const addedItem = added.item;
        if (added) {
          dispatch(addedToCart(addedItem));
          dispatch(productDecremented(addedId));
        }
      } catch(e) {
        console.error(e);
      }
  }

  const showActionButtons = showEdit ? "actions product-actions hidden" : "actions product-actions";

  return (
    <div className="product">
      <div className="product-details" id={item._id}>
        <h3>{item.title}</h3>
        {
          item.title.includes('Srdjan Bobblehead') &&
          <img src="./images/srdjan_bobblehead_sml.png" alt="Srdjan Bobblehead"></img>
        }
        <p className="price">${(item.price).toFixed(2)}</p>
        <p className="quantity">{item.quantity} left in stock</p>
        <div className={showActionButtons}>
          <a href="/#" className="button add-to-cart" onClick={addItemToCart}>Add to Cart</a>
          <a href="/#" className="button edit" onClick={toggleEdit}>Edit</a>
        </div>
        {showEdit && 
          <EditProduct 
            item={item} 
            onToggleEdit={toggleEdit} 
          />
        }
        <a href="/#" className="delete-button" onClick={handleDeleteProduct}><span>X</span></a>
      </div>
    </div>
  );
}

export default Product;