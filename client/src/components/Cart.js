import CartItem from "./CartItem";

const Cart = ({ currentCart }) => {
  if (currentCart.length === 0) {
    return (
      <div className="cart">
        <h2>Your Cart</h2>
        <p>Your cart is empty</p>
        <p>Total: $0</p>
        <a href="/" className="button checkout disabled">Checkout</a>
      </div>
    );
  }
  return (
    <div class="cart">
        <h2>Your Cart</h2>
        <table class="cart-items">
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
          {/* {currentCart.map(cartItem => <CartItem key={cartItem.id} />)} */}
          <CartItem />
          <tr>
            <td colspan="3" class="total">Total: $160ish</td>
          </tr>
        </table>
        <a href="/" class="button checkout">Checkout</a>
      </div>
  )
}


export default Cart;