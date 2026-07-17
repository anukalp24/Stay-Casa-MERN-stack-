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

const Navbar = () => {
const navigate = useNavigate()










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

  // useEffect(() => {
  //   const handleClickOutside = (e) => {
  //     if (menuRef.current && !menuRef.current.contains(e.target)) {
  //       setOpen(false);
  //     }
  //   };

  //   const handleEsc = (e) => {
  //     if (e.key === "Escape") {
  //       setOpen(false);
  //     }
  //   };

  //   document.addEventListener("mousedown", handleClickOutside);
  //   document.addEventListener("keydown", handleEsc);

  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //     document.removeEventListener("keydown", handleEsc);
  //   };
  // }, []);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">UrbanStay</Link>
      </div>

      <div className="navbar-center">
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
      </div>

      <div className="navbar-right">
        <Link className="host-btn" to="/Host">
          List your property
        </Link>

        <div className="profile-wrapper" ref={menuRef}>
          <button className="profile-pill" onClick={() => setOpen(!open)}>
            <HiOutlineMenu className="menu-icon" />
          </button>

          <div className={`dropdown ${open ? "show" : ""}`}>
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
