export default function RestaurantCard({ restaurant,addToCart }) {
  return (
    <div style={{

      border:"1px solid #eee",
      borderRadius:"12px",
      overflow:"hidden",
      cursor:"pointer",
      transition:"0.2s",
      boxShadow:"0 2px 8px rgba(0,0,0,0.1)",
    }}

      onMouseOver={(e) =>
        (e.currentTarget.style.transform = "scale(1.03)")
      }
      onMouseOut={(e) =>
        (e.currentTarget.style.transform = "scale(1)")
      }
>
    <img src={restaurant.image}
    alt={restaurant.name}
    style={{
      width:"100%",
      height:"140px",
      objectFit:"cover",
    }}/>

   <div style={{padding:"10px"}}>
    <h3 style={{margin :"5px 0px"}}>{restaurant.name}</h3>
    <p style={{ fontWeight: "bold" }}>₹{restaurant.price}</p>
    

    <p style={{ margin: "3px 0", color: "#666" }}>
          {restaurant.category}
        </p>

        <p style={{margin:"3px 0"}}>⭐ {restaurant.rating}</p>
        <p>{restaurant.time}</p>
        <button onClick= {()=>{addToCart(restaurant);
        console.log("Button Click");

        }}style={{
          marginTop:"8px",
          padding:"6px 10px",
          border:"none",
          background:"#ff5200",
          color:"white",
          borderRadius:"6px",
          cursor:"pointer",
        }}>
          Add
        </button>
   </div>
    

    </div>
  );
}