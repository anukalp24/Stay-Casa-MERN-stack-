import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <>





    <div className="footer-parent">

<div className="footer-section">

<div className="footer-sec-1">
    <h2>Urban-Stay</h2>
<p>Discover luxury stays and unforgettable travel experiences with UrbanStay.</p>
</div>
<div className="footer-sec-1">
    <h2>Company</h2>
  <Link to="/about">About Us</Link>
<Link to="/security-policy">Security and Privacy Policy</Link>
<Link to="/terms-and-conditions">Terms & Conditions</Link>
<Link to="/Contact">Contact Us</Link>
<Link to="/faq">FAQ</Link>
</div>


<div className="footer-sec-1">
    <h2>Account</h2>
   <a href="">Login</a>
  <a href="">Stays</a>
   <a href="/Host">Become a Host</a>
</div>

<div className="footer-sec-1">
    <h2>Address</h2>
  <p>10, Vatika City Market, Sector 49, Sohna-Gurgaon Road, Gurgaon: 122018, INDIA</p>
  <span>9630048178</span>
  <span>anukalpagarwal@gmail.com</span>
  <span>7:00 - 18:00, Mon - Sun</span>
</div>

</div> {/* footer-section-div */}

<div className="footer-bottom">
     <p>
            © 2026 UrbanStay. All rights reserved.
        </p>
</div>
    </div>
    
    


    
    
    
    
    
    
    
    </>
  )
}

export default Footer
