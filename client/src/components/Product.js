// import React from 'react'
import { useDispatch } from 'react-redux'
import ProductEdit from './ProductEdit'
import productService from '../services/products'
import cartItemService from '../services/cart_items'
import { productRemoved, productUpdated } from "../actions/productActions"
import { cartItemAdded } from "../actions/cartActions"
import { useState } from 'react'

const Product = ( { product } ) => {
	const [ showEditForm, setShowEditForm ] = useState(false)

	const dispatch = useDispatch();
	
	const handleDeleteProduct = async (e) => {
		e.preventDefault();
		await productService.remove(product._id)
		dispatch(productRemoved(product._id))
	}

	const handleAddCartItem = async () => {
		if (product.quantity !== 0) {
			const response = await cartItemService.add({"productId": product._id})
			dispatch(cartItemAdded(response.data))
		}
  }

	const toggleEditForm = (e) => {
		e.preventDefault();

		setShowEditForm(!showEditForm)
	}

	return (
		<div className="product">
			<div className="product-details">
				<h3>{product.title}</h3>
				<p className="price">{product.price}</p>
				<p className="quantity">`{product.quantity} left in stock`</p>
				<a className="delete-button" onClick={handleDeleteProduct}><span>X</span></a>
				{showEditForm ? 
				(<ProductEdit product={product} onToggleEditForm={toggleEditForm} />) :
				<div className="actions product-actions">
					<a className={`button add-to-cart ${product.quantity === 0 ? "disabled" : ""}`} onClick={handleAddCartItem} >Add to Cart</a>
					<a className="button edit" onClick={toggleEditForm}>Edit</a>
				</div>
				}
			</div>
		</div>
	)
};

export default Product
