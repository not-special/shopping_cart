import React from 'react'
import Product from './Product';

const ProductListing = ({ products, onDeleteProduct, onUpdateProduct }) => {
	return (
		<div className="product-listing">
        <h2>Products</h2>
				{products.map( product => <Product key={product.id} product={product} onDeleteProduct={onDeleteProduct} onUpdateProduct={onUpdateProduct}/> )}
		</div>
	)
};

export default ProductListing;