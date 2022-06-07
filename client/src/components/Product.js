import { useState } from "react";
import EditProduct from "./EditProduct";

const Product = ({item})=> {
  const [ showEdit, setShowEdit ] = useState(false);
  
  const toggleEdit = () => {
    setShowEdit(!showEdit)
  }

  return (
    <div className="product">
      <div className="product-details">
        <h3>{item.title}</h3>
        <p className="price">{item.price}</p>
        <p className="quantity">{item.quantity} left in stock</p>
        <div className="actions product-actions">
          <a href="/#" className="button add-to-cart">Add to Cart</a>
          <a href="/#" className="button edit" onClick={toggleEdit}>Edit</a>
          {showEdit && <EditProduct product={item} />}
        </div>
        <a href="/#" className="delete-button"><span>X</span></a>
      </div>
    </div>
  );
}

export default Product;