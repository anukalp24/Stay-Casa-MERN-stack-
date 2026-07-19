import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  HiOutlineMenu,
  HiOutlineHome,
  HiOutlineHeart,
  HiOutlineLogout,
  HiOutlineClipboardList,
  HiOutlinePlusCircle,
} from "react-icons/hi";
import { MdPerson } from "react-icons/md";
const Navbar = () => {
const navigate = useNavigate()

const [scrolled, setscrolled] = useState(false)




useEffect(() => {
 const handleScroll = ()=>{
setscrolled(window.scrollY > 100)
 }
 window.addEventListener("scroll" , handleScroll)
}, [])




  const logout =  async()=>{
  const logout= await fetch("http://localhost:4090/logout", {
    method: "POST",
    credentials: "include"
  })

  if(logout.ok){
    alert("its working")
  localStorage.removeItem("accessToken")
  }
  }










  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

 

  return (
    <nav className={scrolled ? "navbar-scrolled" : "navbar"}>
      <div className="navbar-logo">
        <Link to="/">UrbanStay</Link>
      </div>

      <div className= { scrolled ? "navbar-center-scrolled" : "navbar-center" }>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/stays">Explore</Link>
      </div>

      <div className="navbar-right">
        <Link className={scrolled ? "host-btn-scrolled" : "host-btn"} to="/Host">
          List your property
        </Link>


        <Link className="signin" to="/auth">
        <MdPerson/>
        </Link>

        <div className="profile-wrapper" ref={menuRef}>
          <button className="profile-pill" onClick={() => setOpen(!open)}>
            <HiOutlineMenu className="menu-icon" />
          </button>

          <div className={`dropdown ${open ? "show" : ""}`}>

<div className="mobile-user">

 <div className="mobile-user-icon">
        <MdPerson />
    </div>

    <Link
        to="/auth"
        className="mobile-login-btn"
        onClick={() => { setOpen(false) ; navigate("/auth")}}
        >
        Login / Sign up
    </Link>
      </div>

            
            <Link
              to="/wishlist"
              className="dropdown-item"
              onClick={() => setOpen(false)}
            >
              <HiOutlineHeart />
              Wishlist
            </Link>

            <Link
              to="/Bookings"
              className="dropdown-item"
              onClick={() => setOpen(false)}
            >
              <HiOutlineClipboardList />
              Your Bookings
            </Link>

            <Link
              to="/dashboard"
              className="dropdown-item"
              onClick={() => setOpen(false)}
            >
              <HiOutlineHome />
              Dashboard
            </Link>

            <Link
              to="/Host"
              className="dropdown-item"
              onClick={() => setOpen(false)}
            >
              <HiOutlinePlusCircle />
              Add Property
            </Link>

            <Link 
           
              className="dropdown-item logout"
              onClick={logout}
            >
              <HiOutlineLogout />
              Logout
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
