import Header from "./Components/Header";
import ProductList from "./Components/ProductList";
import Cart from "./Components/Cart";
import CartSummary from "./Components/CartSummary";
import Footer from "./Components/Footer";
import { CartProvider, useCart } from "./Context/CartContext";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 2499,
    emoji: "🎧",
  },
  {
    id: 2,
    name: "Smart Watch",
    category: "Electronics",
    price: 3999,
    emoji: "⌚",
  },
  {
    id: 3,
    name: "Gaming Mouse",
    category: "Gaming",
    price: 1499,
    emoji: "🖱️",
  },
  {
    id: 4,
    name: "Mechanical Keyboard",
    category: "Gaming",
    price: 3299,
    emoji: "⌨️",
  },
  {
    id: 5,
    name: "Laptop Backpack",
    category: "Accessories",
    price: 1899,
    emoji: "🎒",
  },
  {
    id: 6,
    name: "Bluetooth Speaker",
    category: "Electronics",
    price: 2199,
    emoji: "🔊",
  },
];

function ShoppingApp() {
  const { state } = useCart();

  const cartCount = state.cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="app">
      <Header cartCount={cartCount} />

      <main className="main-content">
        <ProductList products={products} />

        <div className="shopping-area">
          <Cart />

          <CartSummary />
        </div>
      </main>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <CartProvider>
      <ShoppingApp />
    </CartProvider>
  );
}

export default App;