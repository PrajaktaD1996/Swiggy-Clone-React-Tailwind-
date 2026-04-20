import { useState } from "react";
import RestaurantCard from "../components/RestaurantCard";
import { restaurants } from "../data";

export default function Home() {
  const [search, setSearch] = useState("");
  const [category,setCategory] = useState("All");

  const chipStyle ={
    padding:"8px 14px",
    borderRadius:"20px",
    border:"1px solid #ddd",
    background:"white",
    cursor:"ponter",
    fontSize:"14px",
  }

  const filtered = restaurants.filter((res) => {
  const matchSearch = res.name
    .toLowerCase()
    .includes(search.toLowerCase());

  const matchCategory =
    category === "All" || res.category === category;

  const matchTopRated =
    category !== "TopRated" || res.rating > 4.2;

  return matchSearch && matchCategory && matchTopRated;
});
  return (
    <div style={{ padding: "20px 40px" }}>
      <h2>Restaurants near you 🍔</h2>
      <div style={{ margin: "10px 0", display: "flex", gap: "10px" }}>
  <button style={chipStyle} onClick={() => setCategory("All")}>All</button>
  <button style={chipStyle} onClick={() => setCategory("Pizza")}>🍕 Pizza</button>
  <button style={chipStyle} onClick={() => setCategory("Burger")}>🍔 Burger</button>
  <button style={chipStyle} onClick={() => setCategory("Biryani")}>🍛 Biryani</button>
  <button style={chipStyle} onClick={() => setCategory("TopRated")}>⭐ Top Rated</button>
</div>
      
      
      <input
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "8px",
          width:"250px",

          marginBottom: "20px",
          border:"1px solid #ccc",
        borderRadius:"6px", }}
      />

      <div style={{ display: "grid", gap: "15px",gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
        {filtered.map((res) => (
          <RestaurantCard key={res.id} restaurant={res} />
        ))}
      </div>
    </div>
  );
}