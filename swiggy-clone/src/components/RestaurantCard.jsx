export default function RestaurantCard({ restaurant }) {
  return (
    <div style={{

      border:"1px solid #eee",
      borderRadius:"12px",
      overflow:"hidden",
      cursor:"pointer",
      transition:"0.2s",
      boxShadow:"0 2px 8px rgba(0,0,0,0.1)",
    }}

      onMouseOut={(e)=>(e.currentTarget.style.transform="scale(1.03)")}
      onMouseOut={(e)=>(e.currentTarget.style.transform="scale(1)")}
>
    <img src={restaurant.image}
    style={{
      width:"100%",
      height:"140px",
      objectFit:"cover",
    }}/>

   <div style={{padding:"10px"}}>
    <h3>{restaurant.name}</h3>
        <p>⭐ {restaurant.rating}</p>
        <p>{restaurant.time}</p>
   </div>
    

    </div>
  );
}