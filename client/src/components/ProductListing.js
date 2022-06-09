import React, { useEffect } from 'react'
import Product from './Product';
import productService from '../services/products'
import { useDispatch, useSelector } from "react-redux";
import { productsReceived } from "../actions/productActions"

const ProductListing = ({ onDeleteProduct, onUpdateProduct, onAddCartItem}) => {
	const dispatch = useDispatch()
	const products = useSelector((state) => {
		console.log("re-fetching products!!", state.products)
		return state.products
	})
	const getProducts = async () => {
    const products = await productService.getAll()
		dispatch(productsReceived(products))
  }
	useEffect(getProducts, [dispatch])

	return (
		<div className="product-listing">
        <h2>Products</h2>
				{products.map( product => <Product key={product._id} product={product} onDeleteProduct={onDeleteProduct} onUpdateProduct={onUpdateProduct} onAddCartItem={onAddCartItem} /> )}
		</div>
	)
};

export default ProductListing;