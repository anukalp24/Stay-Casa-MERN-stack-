import React from 'react'
import "./Hero.css"
import { useState , useEffect  , useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { info } from '..'
const Hero = () => {
  
 const navigate = useNavigate()
const {search, setsearch  } = useContext(info)



const HandleAdd =  async()=>{
  localStorage.setItem("search" , search)
  navigate("/search")
}
  return (
    <>
    <section className="hero-section">

    <div className="hero-content">

        <h1>
            Find your perfect stay
        </h1>

        <p>
            Discover luxury villas, cozy cabins and modern apartments around the world.
        </p>
        <div className="search-box">
          <input  onChange={(e)=>setsearch(e.target.value)}  placeholder='Search stays' type="text"  id="search-input" />
          <button  onClick={HandleAdd} id='search'>Search</button>
        </div>

    </div>

</section>
    
    </>
  )
}

export default Hero
