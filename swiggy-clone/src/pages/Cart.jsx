export default function Cart({cart,setCart}){
    const removeItem = (index) => {

        const newCart = cart.filter((_,i)=> i !== index);
        setCart(newCart);
    };

    const total = cart.reduce((sum,item)=>sum+item.price*item.qty,0);
return(


    <div style ={{
        
        marginTop:"20px",
        padding:"15px",
        borderTop:"2px solid #eee",
        fontWeight:"bold",

    }}>
        <h2>Your cart</h2>
          {
            cart.length===0?(<div style={{textAlign:"center",marginTop:"50px"}}><h2>🛒Cart is empty</h2><p>Add some delicious items!</p></div>):(cart.map((item,index)=>
            (<div key={index}
                   style={{

                    display:"flex",
                    justifyContent:"space-between",
                    padding:"10px",
                    marginTop:"10px",
                    alignItems:"center",
                    padding:"10px",
                    marginBottom:"10px",
                    border:"1px solid #eee",
                    borderRadius:"10px",


                   }}>

                    <div>
                        <h4>{item.name}</h4>
                        <p>{item.rating}</p>
                        <p>₹{item.price} × {item.qty}</p>

                   </div>

                   <div style={{display:"flex",alignItems:"center",gap:"10px"}}>

                   <button
                     onClick={()=>removeItem(index)}
                     disable={item.qty ===1}
                     style={{

                             background:"red",
                             color:"white",
                             border:"none",
                             padding:"5px 10px",
                             cursor:"pointer",
                     }}>

                     -
                   </button>
                   <span>{item.qty}</span>
                   <button onClick={()=>addToCart(item)}>+</button>
                </div>
                </div>
              
                
                ))
          )}
    </div>
);
}