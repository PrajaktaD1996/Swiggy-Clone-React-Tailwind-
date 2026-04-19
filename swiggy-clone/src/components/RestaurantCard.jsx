export default function RestaurantCard({ restaurant }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "10px",
      overflow: "hidden",
      width: "200px"
    }}>
      <img
        src={restaurant.image}
        style={{ width: "100%", height: "120px", objectFit: "cover" }}
      />

      <div style={{ padding: "10px" }}>
        <h3>{restaurant.name}</h3>
        <p>⭐ {restaurant.rating}</p>
        <p>{restaurant.time}</p>
      </div>
    </div>
  );
}