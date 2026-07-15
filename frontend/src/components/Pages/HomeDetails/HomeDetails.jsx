import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import "./HomeDetails.css"
import Footer from '../../Footer/Footer'
import Navbar from '../../Navbar/Navbar'
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from 'react-datepicker'
import fetchWithRefresh from '../../../Utils/fetchWithRefresh'



const Home = () => {



  const { id } = useParams()
  const [home, sethome] = useState(null)
  const [imgError, setImgError] = useState(false)
const [checkIn, setcheckIn] = useState(null)
const [checkOut, setcheckOut] = useState(null)
const [message, setmessage] = useState("")





  useEffect(() => {
    const homefunc = async () => {
      const request = await fetch(`http://localhost:4090/home/${id}`)
      const result = await request.json()
      sethome(result)
    }
    homefunc()
  }, [])

  

  const handleadd = async  (id)=>{


    if(!checkIn || !checkOut){
      return  setmessage("Please select check-in and check-out dates.")
    }

    const createCheckoutSession = await fetchWithRefresh(`http://localhost:4090/create-checkout-session/${id}` , {
    headers: {
          "Content-Type": "application/json",
      authorization: localStorage.getItem("accessToken")
    } ,
    method: "POST",
    body: JSON.stringify({
      checkIn: checkIn,
      checkOut: checkOut
    }),
    credentials: "include"
    })

    console.log(createCheckoutSession);
    if(createCheckoutSession.ok){
const data = await createCheckoutSession.json()
window.location.href = data.url;
}
}

  const handleshare = async ()=>{
    try {
      await navigator.share({
        title: "UrbanStay",
        text: "Check out this amazing property!",
        url: window.location.href
      })
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
    <Navbar/>
    <div className="hd-wrapper">

      <div className="hd-hero">
        <img
          className="hd-hero-img"
          src={imgError ? null : home?.home?.file}
        />
        <div className="hd-hero-overlay" />
        <div className="hd-hero-badge">Guest favourite</div>
      </div>

      <div className="hd-body">

        <div className="hd-main">
          <div className="hd-title-row">
            <h1 className="hd-title">{home?.home?.propertyName}</h1>
            <div className="hd-share-row">
<svg onClick={handleshare}
  viewBox="0 0 50 50"
  fill="currentColor"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M38.288 10.297l1.414 1.415-14.99 14.99-1.414-1.414z" />
  <path d="M40 20h-2v-8h-8v-2h10z" />
  <path d="M35 38H15c-1.7 0-3-1.3-3-3V15c0-1.7 1.3-3 3-3h11v2H15c-.6 0-1 .4-1 1v20c0 .6.4 1 1 1h20c.6 0 1-.4 1-1V24h2v11c0 1.7-1.3 3-3 3z" />
</svg>

 


            </div>
          </div>

          <div className="hd-meta-row">
            <span className="hd-rating"><span className="hd-star">★</span> {home?.home?.rating}</span>
            <span className="hd-meta-dot" />
            <span>📍 {home?.home?.cityname}</span>
          </div>

          <div className="hd-host-section">
            <div className="hd-host-avatar">
              {home?.home?.propertyName?.charAt(0)?.toUpperCase() || "H"}
            </div>
            <div className="hd-host-info">
              <h4>Hosted by  {home?.home?.owner?.name} </h4>
              <p>Superhost · 4 years hosting</p>
            </div>
          </div>
{/* <p className="dashboardhomesdetails-description">
              {dashboardHomeDetails?.home.owner?.name}
            </p> */}
          <div className="hd-highlights">
            <div className="hd-highlight-item">
              <span className="hd-highlight-icon">🏠</span>
              <div className="hd-highlight-text">
                <strong>Entire home</strong>
                <span>You'll have the place to yourself</span>
              </div>
            </div>
            <div className="hd-highlight-item">
              <span className="hd-highlight-icon">🧹</span>
              <div className="hd-highlight-text">
                <strong>Enhanced Clean</strong>
                <span>Strict cleaning protocol</span>
              </div>
            </div>
            <div className="hd-highlight-item">
              <span className="hd-highlight-icon">🔑</span>
              <div className="hd-highlight-text">
                <strong>Self check-in</strong>
                <span>Check yourself in</span>
              </div>
            </div>
            <div className="hd-highlight-item">
              <span className="hd-highlight-icon">⏳</span>
              <div className="hd-highlight-text">
                <strong>Free cancellation</strong>
                <span>Cancel within 48 hours</span>
              </div>
            </div>
          </div>

          <h2 className="hd-desc-title">About this place</h2>
          <p className="hd-description">{home?.home?.desc}</p>

        </div>

        <div className="hd-sidebar">

          <div className="hd-booking-card">
            <div className="hd-booking-header">
              <span className="hd-booking-price">
                ₹{home?.home?.price}<span> / night</span>
              </span>
              <span className="hd-booking-rating">
                <span className="hd-star">★</span> {home?.home?.rating}
              </span>
            </div>
{/*  */}
            <div className="hd-date-picker">
              <div className="hd-date-field">
              
                <DatePicker    minDate={new Date()}   selected={checkIn}   onChange={setcheckIn}  placeholderText="Check In"        />
                <span>Add date</span>
              </div>
              <div className="hd-date-field">
             <DatePicker   minDate={new Date()}   selected={checkOut}  onChange={setcheckOut} placeholderText="Check out"/>
                <span>Add date</span>
              </div>
            </div>
<p>{message}</p>
            <div className="hd-guest-select">
              <label>Guests</label>
              <span>1 guest</span>
            </div>

            <button onClick={()=>handleadd(home?.home?._id)} className="hd-book-btn">Reserve Now</button>

            <p className="hd-charge-note">You won't be charged yet</p>

            <div className="hd-price-break">
              <div className="hd-price-row">
                <span>₹{home?.home?.price} x 1 night</span>
                <span>₹{home?.home?.price}</span>
              </div>
              <div className="hd-price-row">
                <span>Cleaning fee</span>
                <span>₹500</span>
              </div>
              <div className="hd-price-row">
                <span>Service fee</span>
                <span>₹300</span>
              </div>
              <div className="hd-price-row total">
                <span>Total</span>
                <span>₹{(home?.home?.price) + 800}</span>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>

<Footer/>


    </>

  )
}

export default Home
