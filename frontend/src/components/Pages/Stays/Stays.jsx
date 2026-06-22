import React from 'react'
import "./Stays.css"
import { useState , useEffect , useContext } from 'react'
import { info } from '../..'
import Navbar from 'components/Navbar/Navbar'
import Footer from 'components/Footer/Footer'
import { useNavigate} from 'react-router-dom'
const Card = () => {
const navigate = useNavigate()
  const {response , setresponse , setwishlist , wishlist , form} = useContext(info)

const handlewishlist  = async (val)=>{
  if(val.wishlist === true){
    return
  }
let WishlistRequest =   await fetch(`http://localhost:4090/wishlist/${val._id}` , {
    method: "PUT",
         headers:{
            "Content-Type":"application/json",
            authorization: localStorage.getItem("token")
         },
         body: JSON.stringify(val)

  })
      if(!WishlistRequest.ok){
        return
      }
  let result =  await WishlistRequest.json()
  // wishlist becomes true
  // wishlsit now contains an id same id of response
setwishlist([...wishlist , result])
setresponse(
  response.map(item =>
    item._id === val._id
      ? { ...item, wishlist: true }
      : item
  )
)
}

const handleStay = (id)=>{
  navigate(`/home/${id}`)
}
  return (
    <>
    <Navbar/>
<div className="card-parent">
    <div className="card-intro">
    <span>Featured Destinations</span>
    </div>
    <div className="card-section">
{response.map((val, index) => (
  <div
    key={index}
    onClick={() => handleStay(val._id)}
    className="airbnb-card"
  >
    <div className="airbnb-image-wrapper">

      <img
        className="airbnb-image"
        src={val.file}
        alt={val.propertyName}
      />

      <svg
        onClick={(e) => {
          e.stopPropagation();
          handlewishlist(val);
        }}
        className="heart-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>

    </div>

    <div className="airbnb-content">

      <div className="airbnb-row">
        <span className="location">
          {val.cityname}, {val.country}
        </span>

        <span className="rating">
          ★ {val.rating}
        </span>
      </div>

    
      <p className="description">
        {val.desc}
      </p>

  

    </div>
  </div>
))}


    </div>
</div>
  </>        
  )
}
export default Card