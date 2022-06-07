import React from 'react'
import Product from './Product';

const ProductListing = ({ products, onDeleteProduct }) => {
	return (
		<div className="product-listing">
        <h2>Products</h2>
				{products.map( product => <Product key={product.id} product={product} onDeleteProduct={onDeleteProduct}/> )}
		</div>
	)
};

export default ProductListing;