import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  
  const [cart, setCart] = useState(()=>{
    const saved= localStorage.getItem("cart");
    return saved ? JSON.parse(saved):[];
  });
  const [toast, setToast] = useState("");
  useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cart));
}, [cart]);

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
    setToast(`${item.name} added to cart`)
    setTimeout(()=>{
      setToast("");},1500);
    
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

      {toast && (
  <div
    style={{
      position: "fixed",
      top: "20px",
      right: "20px",
      background: "#333",
      color: "white",
      padding: "10px 15px",
      borderRadius: "8px",
      boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
      zIndex: 1000,
    }}
  >
    {toast}
  </div>
)}
    </div>
  );
}

export default App;