import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const [cart, setCart] = useState([]);

  // Add to cart logic (with quantity support)
  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);

      if (existing) {
        return prev.map((i) =>
          i.id === item.id
            ? { ...i, qty: i.qty + 1 }
            : i
        );
      } else {
        return [...prev, { ...item, qty: 1 }];
      }
    });
  };

  return (
    <div>
      {/* Navbar with total quantity */}
      <Navbar
        cartCount={cart.reduce((a, i) => a + i.qty, 0)}
      />

      {/* Routes */}
      <Routes>
        <Route
          path="/"
          element={
            <Home
              cart={cart}
              addToCart={addToCart}
            />
          }
        />

        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              setCart={setCart}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;