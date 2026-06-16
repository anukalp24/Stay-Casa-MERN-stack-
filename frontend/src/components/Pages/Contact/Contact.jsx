import React from 'react'
import Navbar from '../../Navbar/Navbar'
import Footer from '../../Footer/Footer'
import { useState , useEffect } from 'react'
import "./Contact.css"
const Contact = () => {
  const [first, setfirst] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    feedback: ""
  })

const handlechange = (e)=>{
  setfirst({...first , [e.target.name] : e.target.value})
}

const handleadd = ()=>{

}
  return (
    <div>
      <Navbar/>

<div className="contact-page">

<div className="contact-container">

{/* LEFT SECTION */}
<div className="contact-left">

<h1>Get In Touch</h1>

<p className="contact-desc">
We’d love to hear from travelers, hosts and adventure seekers from
around the world. Reach out for booking support, partnerships or
general inquiries about UrbanStay.
</p>

<div className="contact-info-box">

<h2>Email</h2>

<p>support@urbanstay.com</p>

</div>

<div className="contact-info-box">

<h2>Phone</h2>

<p>+91 98765 43210</p>

<p>Available: 24/7 Customer Support</p>

</div>

<div className="contact-info-box">

<h2>Head Office</h2>

<p>
UrbanStay Headquarters<br/>
Mumbai, India
</p>

</div>

<div className="contact-info-box">

<h2>Why Travelers Love Us</h2>

<ul>

<li>Handpicked Luxury Stays</li>

<li>Verified & Trusted Hosts</li>

<li>Seamless Booking Experience</li>

<li>24/7 Customer Assistance</li>

</ul>

</div>

</div>

{/* RIGHT SECTION */}

<div className="contact-right">

<h1>Send Us A Message</h1>

<form className="contact-form">

<div className="input-group">

<label>Name</label>

<input name='name'  onChange={handlechange}  type="text" placeholder="Enter your full name" />

</div>

<div className="input-group">

<label>Email</label>

<input name='email' onChange={handlechange}  type="email" placeholder="Enter your email" />

</div>

<div className="input-group">

<label>Phone Number</label>

<input  name='phoneNumber' onChange={handlechange}  type="text" placeholder="Enter your phone number" />

</div>

<div className="input-group">

<label>Subject</label>

<input name='feedback'  onChange={handlechange}  type="text" placeholder="Order Issue / Partnership / Feedback" />

</div>

<div className="input-group">

<label>Message</label>

<textarea placeholder="Write your message here..."></textarea>

</div>

<button onClick={handleadd} id="contact-btn">
Send Message
</button>

</form>

</div>

</div>

</div>



      <Footer/>
    </div>
  )
}

export default Contact
