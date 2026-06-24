import React from 'react'
import Navbar from '../../Navbar/Navbar'
import Hero from '../../Hero-Section/Hero'
import Footer from '../../Footer/Footer'
import { info } from '../..'
import {  useContext } from 'react'
import "./Home.css"
import { useNavigate } from 'react-router-dom'

import {
  Home,
  Trees,
  Building2,
  House,
  Tractor,
  Bed,
  KeyRound,
} from "lucide-react";


const HomeDetails = () => {

  const Navigate = useNavigate()
const {response , handleStay } = useContext(info)
const featuredHomes = response.slice(0 , 20)
  

const categories = [
  {name: "Villa" , icon: <Home size={24}/>},
  { name: "Cabin", icon: <Trees size={24} /> },
  { name: "Flat", icon: <Building2 size={24} /> },
  { name: "Bungalow", icon: <House size={24} /> },
  { name: "Farm House", icon: <Tractor size={24} /> },
  { name: "Suite", icon: <Bed size={24} /> },
  { name: "Entire Home", icon: <KeyRound size={24} /> },
]

  return (
    <>
    <Navbar/>
    <Hero/>



<div className="category-heading">
  <h1>Explore by Category</h1>

  <p>
    Find the perfect stay for your next trip — from luxury villas
    and cozy cabins to spacious farm houses and entire homes.
  </p>
</div>

<section className='category-section'>
<div className='category-wrapper'>
{categories.map((item)=>(
  <div  onClick={()=> {localStorage.setItem("category" , item.name) ; Navigate("/categories")}} className="category-pill" >
<div className='category-icon'>{item.icon}</div>
<span>{item.name}</span>
  </div>
))}
</div>

</section>












<div className="home-parent">
  <div className="home-intro">
    <span>Popular Stays</span>
  </div>

  <div className="home-section">
    {featuredHomes.map((val, index) => (
      <div
        key={index}
        onClick={() => handleStay(val._id)}
        className="home-card"
      >
        <div className="home-image-wrapper">

          <img
            className="home-image"
            src={val.file}
            alt={val.propertyName}
          />

          <svg
            onClick={(e) => {
              e.stopPropagation();
              handlewishlist(val);
            }}
            className="home-heart-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>

        </div>

        <div className="home-content">

          <div className="home-row">
            <span className="home-location">
              {val.cityname}, {val.country}
            </span>

            <span className="home-rating">
              ★ {val.rating}
            </span>
          </div>

          <p className="home-description">
            {val.desc}
          </p>

        </div>
      </div>
    ))}
  </div>

  <button onClick={() => Navigate("/stays")}>
    Explore more stays
  </button>
</div>





    
    <Footer/>
            </>
  
  )
}

export default HomeDetails
