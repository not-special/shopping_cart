import { useState } from 'react';

const ProductEdit = ({ item, onToggleEdit, onEdit })=> {
  const [ editTitle, setEditTitle ] = useState(item.title);
  const [ editPrice, setEditPrice ] = useState(item.price);
  const [ editQuantity, setEditQuantity ] = useState(item.quantity);

  // const handleTitleChange = (e) => {
  //   setEditTitle(e.target.value);
  // }

  // const handlePriceChange = (e) => {
  //   setEditPrice(e.target.value);
  // }

  // const handleQtyChange = (e) => {
  //   setEditQuantity(e.target.value);
  // }

  const handleChange = (e) => {
    const changedVal = e.target.value
    switch (e.target.id) {
      case 'product-name':
        return setEditTitle(changedVal);
      case 'product-price':
        return setEditPrice(changedVal);
      default:
        return setEditQuantity(changedVal);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProd = {
      title: editTitle,
      price: editPrice,
      quantity: editQuantity
    };

    const id = e.target.id;
    
    onEdit(updatedProd, id);
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
          <label htmlFor="product-name">Product Name</label>
          <input type="text" id="product-name" value={editTitle} onChange={handleChange} />
        </div>

        <div className="input-group">
          <label htmlFor="product-price">Price</label>
          <input type="text" id="product-price" value={editPrice} onChange={handleChange}/>
        </div>

        <div className="input-group">
          <label htmlFor="product-quantity">Quantity</label>
          <input type="text" id="product-quantity" value={editQuantity} onChange={handleChange}/>
        </div>

        <div className="actions form-actions">
          <a href="/#" className="button" id={item._id} onClick={handleSubmit}>Update</a>
          <a href="/#" className="button" onClick={onToggleEdit}>Cancel</a>
        </div>
      </form>
    </div>
  );
}

export default ProductEdit;