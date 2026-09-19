import { useState } from "react";
import { useCart } from "../Context/CartContext";

function CartSummary() {
  const { state, dispatch } = useCart();

  const [couponInput, setCouponInput] = useState("");
  const [couponMessage, setCouponMessage] = useState("");

  const subtotal = state.cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const discount = state.coupon
    ? (subtotal * state.coupon.discount) / 100
    : 0;

  const amountAfterDiscount = subtotal - discount;

  const gst = amountAfterDiscount * 0.18;

  const grandTotal = amountAfterDiscount + gst;

  const applyCoupon = () => {
    const code = couponInput.trim().toUpperCase();

    const coupons = {
      SAVE10: 10,
      SAVE20: 20,
      SAVE30: 30,
    };

    if (coupons[code]) {
      dispatch({
        type: "APPLY_COUPON",
        payload: {
          code,
          discount: coupons[code],
        },
      });

      setCouponMessage(
        `${code} applied successfully!`
      );
    } else {
      setCouponMessage(
        "Invalid coupon code."
      );
    }
  };

  const removeCoupon = () => {
    dispatch({
      type: "REMOVE_COUPON",
    });

    setCouponInput("");
    setCouponMessage("");
  };

  return (
    <section className="summary-section">
      <h2>Order Summary</h2>

      <div className="coupon-area">
        <input
          type="text"
          placeholder="Enter coupon code"
          value={couponInput}
          onChange={(event) =>
            setCouponInput(event.target.value)
          }
        />

        <button onClick={applyCoupon}>
          Apply
        </button>
      </div>

      {couponMessage && (
        <p className="coupon-message">
          {couponMessage}
        </p>
      )}

      {state.coupon && (
        <button
          className="remove-coupon"
          onClick={removeCoupon}
        >
          Remove Coupon
        </button>
      )}

      <div className="summary-row">
        <span>Subtotal</span>
        <span>₹{subtotal.toFixed(2)}</span>
      </div>

      <div className="summary-row">
        <span>Discount</span>
        <span>- ₹{discount.toFixed(2)}</span>
      </div>

      <div className="summary-row">
        <span>GST (18%)</span>
        <span>₹{gst.toFixed(2)}</span>
      </div>

      <hr />

      <div className="summary-total">
        <span>Grand Total</span>
        <span>₹{grandTotal.toFixed(2)}</span>
      </div>
    </section>
  );
}

export default CartSummary;