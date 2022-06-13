import ProductEdit from './ProductEdit'
import { updateProduct, deleteProduct, ProductContext } from "../context/product-context"
import { addCartItem, CartContext } from "../context/cart-context"
import { useContext } from 'react';

const Product = ( { product } ) => {
	const { dispatch } = useContext(ProductContext)
	const { cartItems, setCartItems } = useContext(CartContext)
	
	const handleDeleteProduct = (e) => {
		e.preventDefault();
		deleteProduct(dispatch, product._id)
	}

	const handleAddCartItem = () => {
		addCartItem(cartItems, setCartItems, product._id, updateProduct, dispatch)
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