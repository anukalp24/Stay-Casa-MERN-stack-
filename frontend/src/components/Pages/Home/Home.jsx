import React from 'react'
import Navbar from '../../Navbar/Navbar'
import Hero from '../../Hero-Section/Hero'
import Footer from '../../Footer/Footer'
import Categories from '../Categories/Categories'
import Stays from "../Stays/Stays"
const HomeDetails = () => {

  return (
        <div className="home-parent-container">

      <Navbar/>
      <Hero/>
<Stays/>
<Categories/>
      <Footer/>
        </div>
    
  )
}

export default HomeDetails
