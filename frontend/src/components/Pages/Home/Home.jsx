import React from 'react'
import Navbar from '../../Navbar/Navbar'
import Hero from '../../Hero-Section/Hero'
import Footer from '../../Footer/Footer'
import { info } from '../..'
import {  useContext } from 'react'
import "./Home.css"
import { useNavigate } from 'react-router-dom'
const HomeDetails = () => {

  const Navigate = useNavigate()
const {response , handleStay } = useContext(info)
const featuredHomes = response.slice(0 , 20)
  

  return (
    <>
    <Navbar/>
    <Hero/>
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

<div className="home-lifestyle-section">
  <div className="home-lifestyle-heading">
    <h1>Discover Unique Stays</h1>
    <p>
      Explore beautifully curated stays for every kind of traveler —
      from luxury beachfront villas to peaceful mountain escapes.
    </p>
  </div>

  <div className="home-lifestyle-wrapper">

    <div
      onClick={() => {
        localStorage.setItem("category", "Villa");
        Navigate("/categories");
      }}
      className="home-stay-card"
    >
      <div className="home-stay-content">
        <h2>Villa</h2>
      </div>
    </div>

    <div
      onClick={() => {
        localStorage.setItem("category", "Cabin");
        Navigate("/categories");
      }}
      className="home-stay-card"
    >
      <div className="home-stay-content">
        <h2>Cabin</h2>
      </div>
    </div>

    <div
      onClick={() => {
        localStorage.setItem("category", "Flat");
        Navigate("/categories");
      }}
      className="home-stay-card"
    >
      <div className="home-stay-content">
        <h2>Flat</h2>
      </div>
    </div>

    <div
      onClick={() => {
        localStorage.setItem("category", "Bungalow");
        Navigate("/categories");
      }}
      className="home-stay-card"
    >
      <div className="home-stay-content">
        <h2>Bungalow</h2>
      </div>
    </div>

    <div
      onClick={() => {
        localStorage.setItem("category", "Farm House");
        Navigate("/categories");
      }}
      className="home-stay-card"
    >
      <div className="home-stay-content">
        <h2>Farm House</h2>
      </div>
    </div>

  </div>
</div>
    
    <Footer/>
            </>
  
  )
}

export default HomeDetails
