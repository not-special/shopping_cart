import React from 'react'
import Product from './Product';

const ProductListing = ({ products, onDeleteProduct, onUpdateProduct, onAddCartItem}) => {
	return (
		<div className="product-listing">
        <h2>Products</h2>
				{products.map( product => <Product key={product._id} product={product} onDeleteProduct={onDeleteProduct} onUpdateProduct={onUpdateProduct} onAddCartItem={onAddCartItem} /> )}
		</div>
	)
};

export default ProductListing;