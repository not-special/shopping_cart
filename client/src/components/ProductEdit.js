import { React, useState, useContext } from 'react'
import { updateProduct, ProductContext } from "../context/product-context" 


const ProductEdit = ({ product }) => {
	const { dispatch: productDispatch } = useContext(ProductContext)

	const [title, setTitle] = useState(product.title)
  const [price, setPrice] = useState(product.price)
  const [quantity, setQuantity] = useState(product.quantity)

	const handleUpdateProduct = (e) => {
		e.preventDefault(); 
    const newProduct = {
      title,
      price,
      quantity
    }
		// console.log()
		updateProduct(productDispatch, product._id, newProduct) 

		setTitle('')
    setPrice('')
    setQuantity('')
	};


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
		<div className="edit-form">
		<h3>Edit Product</h3>
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
				<a className="button" onClick={handleUpdateProduct}>Update</a>
				<a className="button">Cancel</a>
			</div>
		</form>
	</div>
  )
}

export default ProductEdit