import { useState } from 'react';

const ProductEdit = ({ item, onToggleEdit, onHandleEdit })=> {
  const [ editTitle, setEditTitle ] = useState(item.title);
  const [ editPrice, setEditPrice ] = useState(item.price);
  const [ editQuantity, setEditQuantity ] = useState(item.quantity);

  const handleTitleChange = (e) => {
    setEditTitle(e.target.value);
  }

  const handlePriceChange = (e) => {
    setEditPrice(e.target.value);
  }

  const handleQtyChange = (e) => {
    setEditQuantity(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProd = {
      title: editTitle,
      price: editPrice,
      quantity: editQuantity
    };
    const id = e.target.parentElement.parentElement.parentElement.parentElement.id; // UGLY!!!
    
    onHandleEdit(updatedProd, id);
    setEditTitle('');
    setEditPrice('');
    setEditQuantity('');
    onToggleEdit(e);
  }

  return (
    <div className="edit-form">
      <h3>Edit Product</h3>
      <form>
        <div className="input-group">
          <label for="product-name">Product Name</label>
          <input type="text" id="product-name" value={editTitle} onChange={handleTitleChange} />
        </div>

        <div className="input-group">
          <label for="product-price">Price</label>
          <input type="text" id="product-price" value={editPrice} onChange={handlePriceChange}/>
        </div>

        <div className="input-group">
          <label for="product-quantity">Quantity</label>
          <input type="text" id="product-quantity" value={editQuantity} onChange={handleQtyChange}/>
        </div>

        <div className="actions form-actions">
          <a href="/#" className="button" onClick={handleSubmit}>Update</a>
          <a href="/#" className="button" onClick={onToggleEdit}>Cancel</a>
        </div>
      </form>
    </div>
  );
}

export default ProductEdit;