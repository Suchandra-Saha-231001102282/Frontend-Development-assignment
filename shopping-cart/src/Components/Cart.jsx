import { useCart } from "../Context/CartContext";
import CartItem from "./CartItems";

function Cart() {
  const { state } = useCart();

  return (
    <section className="cart-section">
      <h2>Shopping Cart</h2>

      {state.cart.length === 0 ? (
        <p className="empty-cart">
          Your cart is empty.
        </p>
      ) : (
        <div className="cart-list">
          {state.cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Cart;