import React from 'react'
import "./Hero.css"

const Hero = () => {
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
          <input placeholder='Search stays' type="text" name="" id="search-input" />
          <button id='search'>Search</button>
        </div>

    </div>

</section>
    
    </>
  )
}

export default Hero
