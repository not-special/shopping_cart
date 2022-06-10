import Cart from './Cart'

const Header = ({ cart, onCheckoutCart }) => {
  return (
    <header>
      <h1>The Shop!</h1>
      <Cart onCheckoutCart={onCheckoutCart}/>
    </header>
  );
}

export default Header;