import React from 'react'
import { info } from '../..'
import { useState , useContext } from 'react'
import Navbar from '../../Navbar/Navbar'
const Wishlist = () => {
    const {wishlist , setwishlist , response , setresponse} = useContext(info)

    
    const handleremove =   async (id)=>{
      let remove = await fetch(`http://localhost:4090/Removewishlist/${id}` , {
        method: "DELETE",
      })


      if(!remove.ok){
        return
      }

 const newitem  = wishlist.filter(val=>{
    return  val._id !== id
  })
// res[sne main abhi bhi true tahst why even wishlsit is removed it will still dont add that particular home
  setwishlist(newitem)
  
setresponse(
  response.map(item =>
    item._id === id
      ? { ...item, wishlist:false }
      : item
  )
)

    }
  return (
<>

<Navbar/>
       
<>
      {wishlist.map((val , index)=>(
        <div key={val._id} className="card-boxes">
        <img id='card-img' src={val.url} alt="" />
        <div className="sec-1">
        <span>{val.propertyName}</span>
        <span>{val.rating}</span>
        </div>
<div className="sec-2">
   <span>{val.cityname}</span>
   <span>{val.desc}</span>
   <span>₹{val.price}</span>
   <button  onClick={()=>handleremove(val._id)} className="wishlist-btn">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    >
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
  </svg>

 Remove from Wishlist ??
</button>
</div>
    </div>
      ))}
      </>
      </>
    
  )
}

export default Wishlist
