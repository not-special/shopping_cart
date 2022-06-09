import { React, useEffect } from 'react'
import CartItem from './CartItem';
import { useDispatch, useSelector } from "react-redux";
import { cartItemsRemoved, cartItemsReceived } from "../actions/cartActions"
import cartItemService from '../services/cart_items'

const Cart = () =>  {
  const items = useSelector((state) => {
		return state.cart
	})

  const dispatch = useDispatch()

  const getCartItems = async () => {
    const cartItems = await cartItemService.getAll()
		dispatch(cartItemsReceived(cartItems))
  }
	useEffect(getCartItems, [dispatch])

  const handleCheckout = async (e) => {
		e.preventDefault();
    await cartItemService.deleteAll()
		dispatch(cartItemsRemoved())
	}

  const getTotalPrice = () => {
    let total = 0;
    items.forEach(item => {
      total += item.price * item.quantity
    })
    return total
  }

  const emptyCart = () => {
    return (
      <>
        <h2>Your Cart</h2>
        <p>Your cart is empty</p>
        <p>Total: $0</p>
      </>
    )
  }

  const nonEmptyCart = () => {
    return (
      <>
        <h2>Your Cart</h2>
        <table className="cart-items">
          <thead>
            <tr>
              <th>Item</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {items.map(item => <CartItem key={item._id} item={item} />)}
            <tr>
              <td colSpan="3" className="total"><p>{`Total: $${getTotalPrice()}`}</p></td>
            </tr>
          </tbody>
        </table>
      </>
    )
  } 

	return (
    <div className="cart">
      {(items.length === 0) ? emptyCart() : nonEmptyCart() }
      <a className={`button checkout ${items.length === 0 ? "disabled" : ""}`} onClick={handleCheckout}>Checkout</a>
    </div>
	)
};

export default Cart
