import React from 'react'
import { useState } from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom"
const Navbar = () => {
  
const [open, setopen] = useState(false)

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
        <Link to="/dashboard">WishList</Link>
        <Link to="/stays">Stays</Link>
        <Link id='login-btn' to="/auth">Login</Link>
        <div onMouseEnter={()=>setopen(true)} onMouseLeave={()=>setopen(false)} className="dropdown-btn">

<div className="dropdown-menu">
<Link to="/stays" id='btn'>Stays</Link>
{open &&(
  <>
  <div className="options">
  <p id='category'  >Beach</p>
  <p id='category' >Mountain</p>
  </div>
  </>
)}
  </div>


        </div>
  
     
     </div>

        <div className="host-box">
          <Link to="/Host" id='host-btn'>Become a host</Link>
        </div>
      </nav>



   
  </>
  )
}

export default Navbar
