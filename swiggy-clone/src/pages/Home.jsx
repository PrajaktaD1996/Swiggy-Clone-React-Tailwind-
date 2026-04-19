import RestaurantCard from "../components/RestaurantCard";
import { restaurants } from "../data";

export default function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Restaurants near you 🍔</h2>

      <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
        {restaurants.map((res) => (
          <RestaurantCard key={res.id} restaurant={res} />
        ))}
      </div>
    </div>
  );
}