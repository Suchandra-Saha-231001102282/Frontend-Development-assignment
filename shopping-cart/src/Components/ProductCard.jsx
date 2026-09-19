import { useCart } from "../Context/CartContext";

function ProductCard({ product }) {
  const { dispatch } = useCart();

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  };

  return (
    <div className="product-card">
      <div className="product-image">
        {product.emoji}
      </div>

      <h3>{product.name}</h3>

      <p className="product-category">{product.category}</p>

      <p className="product-price">₹{product.price.toFixed(2)}</p>

      <button onClick={addToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;