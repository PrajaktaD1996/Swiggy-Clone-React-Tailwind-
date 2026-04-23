import { Link } from "react-router-dom";

export default function Navbar({ cartCount }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 20px",
        borderBottom: "1px solid #eee",
        background: "white",
      }}
    >
      {/* Logo */}
      <h2 style={{ color: "#ff5200" }}>Swiggy</h2>

      {/* Menu */}
      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          Home
        </Link>

        <span>Search</span>

        <Link to="/cart" style={{ textDecoration: "none", color: "black" }}>
          Cart ({cartCount})
        </Link>

        <span>Login</span>
      </div>
    </div>
  );
}


