import React, { useContext, useEffect } from 'react'
import { fetchProducts, ProductContext } from '../context/product-context';
import Product from './Product';

const ProductListing = () => {
	const { products, dispatch } = useContext(ProductContext)
	useEffect(() => {
		fetchProducts(dispatch);
	}, [dispatch])

	return (
		<div className="product-listing">
        <h2>Products</h2>
				{products.map( product => <Product key={product._id} product={product} /> )}
		</div>
	)
};

export default ProductListing;
