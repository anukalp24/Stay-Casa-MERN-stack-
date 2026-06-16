import React from 'react'
import Navbar from '../../Navbar/Navbar'
import Hero from '../../Hero-Section/Hero'
import Footer from '../../Footer/Footer'
import Categories from '../Categories/Categories'
const Home = () => {

  return (
        <div className="home-parent-container">

      <Navbar/>
      <Hero/>
<Categories/>
      <Footer/>
        </div>
    
  )
}

export default Home
