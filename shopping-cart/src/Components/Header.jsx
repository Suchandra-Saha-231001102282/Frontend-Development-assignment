function Header({ cartCount }) {
  return (
    <header className="header">
      <h1>ShopEasy</h1>

      <div className="cart-counter">
        🛒 Cart: {cartCount}
      </div>
    </header>
  );
}

export default Header;