export default function Navbar() {
  return (
    <div style={{
      display:"flex",
      justifyContent:"space-between",
      alignItems:"center",
      padding:"15px 20px",
      borderBottom:"1px solid #eee",
      background:"white",
    }}>

       {/*Logo */}
      <h2 style={{color:"#ff5200"}}>Swiggy</h2> 


      {/*Menu*/}
      <div style={{display:"flex",gap:"20px",cursor:"pointer"}}>

        <span>Home</span>
        <span>Search</span>
        <span>Cart</span>
        <span>Login</span>
      </div>
    </div>
  );
}