import { useCart } from "../Context/CartContext";

function CartItem({ item }) {
  const { dispatch } = useCart();

  const increaseQuantity = () => {
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: {
        id: item.id,
        quantity: item.quantity + 1,
      },
    });
  };

  const decreaseQuantity = () => {
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: {
        id: item.id,
        quantity: item.quantity - 1,
      },
    });
  };

  const removeItem = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: item.id,
    });
  };

  return (
    <div className="cart-item">
      <div>
        <h3>{item.name}</h3>
        <p>₹{item.price.toFixed(2)} each</p>
      </div>

      <div className="quantity-controls">
        <button onClick={decreaseQuantity}>−</button>

        <span>{item.quantity}</span>

        <button onClick={increaseQuantity}>+</button>
      </div>

      <p className="item-total">
        ₹{(item.price * item.quantity).toFixed(2)}
      </p>

      <button
        className="remove-button"
        onClick={removeItem}
      >
        Remove
      </button>
    </div>
  );
}

export default CartItem;