import React, { useEffect } from 'react'
import Product from './Product';
import productService from '../services/products'
import { useDispatch, useSelector } from "react-redux";
import { productsReceived } from "../actions/productActions"

const ProductListing = () => {
	const dispatch = useDispatch()
	const products = useSelector((state) => {
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
				{products.map( product => <Product key={product._id} product={product} /> )}
		</div>
	)
};

export default ProductListing;
