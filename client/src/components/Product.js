import React from 'react'
import { useDispatch } from 'react-redux'
import ProductEdit from './ProductEdit'
import productService from '../services/products'
import cartItemService from '../services/cart_items'
import { productRemoved, productUpdated } from "../actions/productActions"
import { cartItemAdded } from "../actions/cartActions"

const Product = ( { product } ) => {
	const dispatch = useDispatch();
	
	const handleDeleteProduct = async (e) => {
		e.preventDefault();
		await productService.remove(product._id)
		dispatch(productRemoved(product._id))
	}

	const handleAddCartItem = async () => {
		const response = await cartItemService.add({"productId": product._id})
		dispatch(cartItemAdded(response.data.item))
		dispatch(productUpdated(response.data.product))
  }

	return (
		<div className="product">
			<div className="product-details">
				<h3>{product.title}</h3>
				<p className="price">{product.price}</p>
				<p className="quantity">`{product.quantity} left in stock`</p>
				<div className="actions product-actions">
					<a className="button add-to-cart" onClick={handleAddCartItem}>Add to Cart</a>
					<a className="button edit">Edit</a>
				</div>
				<a className="delete-button" onClick={handleDeleteProduct}><span>X</span></a>
			</div>
			<ProductEdit product={product} />
		</div>
	)
};

export default Product
