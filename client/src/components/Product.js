import ProductEdit from './ProductEdit'
import { deleteProduct, ProductContext } from "../context/product-context"
import { useContext } from 'react';



const Product = ( { product, onUpdateProduct, onAddCartItem } ) => {
	const { dispatch: productDispatch } = useContext(ProductContext)
	
	const handleDeleteProduct = (e) => {
		e.preventDefault();
		deleteProduct(productDispatch, product._id)

	}

	const handleAddCartItem = () => {
    onAddCartItem(product._id)
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
			<ProductEdit product={product} onUpdateProduct={onUpdateProduct}/>
		</div>
	)
};

export default Product