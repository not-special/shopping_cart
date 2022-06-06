import React from 'react'
import Product from './Product';

const ProductListing = ({ products }) => {
	return (
		<div className="product-listing">
        <h2>Products</h2>
				{products.map( product => <Product key={product.id} product={product}/> )}
		</div>
	)
};

export default ProductListing;