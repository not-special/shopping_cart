import React from 'react'
import CartItem from './CartItem';

const Cart = ({items}) =>  {
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
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
          {items.map(item => <CartItem key={item._id} item={item} />)}
          <tr>
            <td colspan="3" className="total"><p>{`Total: $${getTotalPrice()}`}</p></td>
          </tr>
        </table>
      </>
    )
  }

	return (
    <div className="cart">
      {(items.length === 0) ? emptyCart() : nonEmptyCart() }
      <a className="button checkout disabled">Checkout</a>
    </div>
	)
};

export default Cart