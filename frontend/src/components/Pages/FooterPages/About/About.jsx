import React from 'react'
import Navbar from '../../../Navbar/Navbar'
import Footer from '../../../Footer/Footer'
import "./About.css"

const About = () => {
  return (
    <>

<Navbar/>

<div className="about-page">

<div className="about-hero">

<h1>Redefining the Way People Travel</h1>
<p>
We help travelers discover unique stays, luxury escapes and cozy homes
across the world — all with comfort, trust and unforgettable experiences.
</p>

</div>

<div className="about-grid">

<div className="about-card">
<h2>10K+</h2>
<p>Happy Travelers</p>
</div>

<div className="about-card">
<h2>500+</h2>
<p>Premium Properties</p>
</div>

<div className="about-card">
<h2>120+</h2>
<p>Cities Covered</p>
</div>

</div>

<div className="about-content">

<div className="about-text">

<h2>Who We Are</h2>

<p>
We are a modern stay-booking platform focused on making travel
more personal and luxurious. Whether you're planning a beach
vacation, mountain retreat or city escape — we connect you with
beautifully curated homes designed for every lifestyle.
</p>

<p>
Our mission is simple: create seamless travel experiences
through elegant stays, trusted hosts and premium comfort.
</p>

</div>

<img
src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
alt=""
/>

</div>

</div>

<Footer/>

    </>
  )
}

export default About