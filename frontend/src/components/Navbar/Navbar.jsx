import React from 'react'
import { useState } from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom"
const Navbar = () => {
  


  return (
  <>
      <nav id='nav'>

        <div className="navbar-logo-box">
                  <h2 id='title'>UrbanStay</h2>
        </div>

     <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/wishlist">WishList</Link>
        <Link id='login-btn' to="/auth">Login</Link>
        <Link  to="/dashboard">Dashboard</Link>
        <Link  to="/Bookings">Your Bookings</Link>
     </div>

        <div className="host-box">
          <Link to="/Host" id='host-btn'>Become a host</Link>
        </div>
      </nav>



   
  </>
  )
}

export default Navbar
