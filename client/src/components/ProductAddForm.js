import { useState } from 'react';

const ProductAddForm = ({ onSubmitHandler })=> {
  const [ showForm, setShowForm ] = useState(false);
  const [ newProdTitle, setNewProdTitle ] = useState('');
  const [ newProdPrice, setNewProdPrice ] = useState('');
  const [ newProdQuantity, setNewProdQuantity ] = useState('');

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleTitleChange = (e) => {
    setNewProdTitle(e.target.value);
  }

  const handlePriceChange = (e) => {
    setNewProdPrice(e.target.value);
  }

  const handleQtyChange = (e) => {
    setNewProdQuantity(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    //create newProd
    const newProd = {
      title: newProdTitle,
      price: newProdPrice,
      quantity: newProdQuantity
    };
    // call db func
    onSubmitHandler(newProd);
    // reset form state
    setNewProdTitle('');
    setNewProdPrice('');
    setNewProdQuantity('');
    toggleForm(); 
  }  

  const addFormClass = showForm ? "add-form visible" : "add-form";
  const showAddButton = showForm ? "button add-product-button" : "button add-product-button visible";

  return (
    <div className={addFormClass}>
        <p><a className={showAddButton} onClick={toggleForm}>Add A Product</a></p>
        <h3>Add Product</h3>
        <form>
          <div className="input-group">
            <label for="product-name">Product Name</label>
            <input type="text" id="product-name" onChange={handleTitleChange}/>
          </div>

          <div className="input-group">
            <label for="product-price">Price</label>
            <input type="text" id="product-price"  onChange={handlePriceChange}/>
          </div>

          <div className="input-group">
            <label for="product-quantity">Quantity</label>
            <input type="text" id="product-quantity"  onChange={handleQtyChange}/>
          </div>

          <div className="actions form-actions">
            <a className="button" onClick={handleSubmit}>Add</a>
            <a className="button" onClick={toggleForm}>Cancel</a>
          </div>
        </form>
      </div>
  );
}

export default ProductAddForm;