import CartItem from "./CartItem";
import calcCartTotal from "../lib/calcCartTotal";

const Cart = ({ currentCart, onCheckoutCart }) => {
  if (currentCart.length === 0) {
    return (
      <div className="cart">
        <h2>Your Cart</h2>
        <p>Your cart is empty</p>
        <p>Total: $0</p>
        <a href="/#" className="button checkout disabled">Checkout</a>
      </div>
    );
  }

  return (
    <div className="cart">
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
          {currentCart.map(cartItem => <CartItem key={cartItem._id} itemDetail={cartItem}/>)}
          <tr>
            <td colSpan="3" className="total">Total: ${calcCartTotal(currentCart)}</td>
          </tr>
          </tbody>
          
        </table>
        <a href="/#" className="button checkout" onClick={onCheckoutCart}>Checkout</a>
      </div>
  )
}


export default Cart;