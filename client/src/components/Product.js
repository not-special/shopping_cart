import { useState } from "react";
import EditProduct from "./EditProduct";

const Product = ({item})=> {
  const [ showEdit, setShowEdit ] = useState(false);
  
  const toggleEdit = () => {
    setShowEdit(!showEdit)
  }

  return (
    <div class="product">
          <div class="product-details">
            <h3>{item.title}</h3>
            <p class="price">{item.price}</p>
            <p class="quantity">{item.quantity} left in stock</p>
            <div class="actions product-actions">
              <a class="button add-to-cart">Add to Cart</a>
              <a class="button edit" onClick={toggleEdit}>Edit</a>
              {showEdit && <EditProduct product={item} />}
            </div>
            <a class="delete-button"><span>X</span></a>
          </div>
        </div>
  );
}

export default Product;