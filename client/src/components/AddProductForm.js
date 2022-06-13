import {useContext, useState} from 'react'
import { addProduct, ProductContext } from "../context/product-context"

const AddProductForm = ({toggleVisibility, visible}) => {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [quantity, setQuantity] = useState('')

  const { dispatch } = useContext(ProductContext)

  const handleAddProduct = (e) => {
    e.preventDefault()
    const product = {
      title,
      price,
      quantity
    }
    addProduct(dispatch, product) 

    setTitle('')
    setPrice('')
    setQuantity('')
  }

  const handleTitleChange = (e) => {
    setTitle(e.target.value)
  }

  const handlePriceChange = (e) => {
    setPrice(e.target.value)
  }

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value)
  }

  return (
    <div className={`add-form ${visible ? 'visible' : ''}`}>
      <p><a class="button add-product-button" onClick={toggleVisibility}>Add A Product</a></p>
      <h3>Add Product</h3>
      <form>
        <div className="input-group">
          <label for="product-name">Product Name</label>
          <input type="text" id="product-name" value={title} onChange={handleTitleChange}/>
        </div>

        <div className="input-group">
          <label for="product-price">Price</label>
          <input type="text" id="product-price" value={price} onChange={handlePriceChange}/>
        </div>

        <div className="input-group">
          <label for="product-quantity">Quantity</label>
          <input type="text" id="product-quantity" value={quantity} onChange={handleQuantityChange}/>
        </div>

        <div className="actions form-actions">
          <a className="button" onClick={handleAddProduct}>Add</a>
          <a className="button" onClick={toggleVisibility}>Cancel</a>
        </div>
      </form>
    </div>
  )
}

export default AddProductForm
