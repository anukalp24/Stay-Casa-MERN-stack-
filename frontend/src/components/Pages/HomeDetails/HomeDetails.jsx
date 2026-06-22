import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import "./HomeDetails.css"
import Footer from '../../Footer/Footer'
const Home = () => {
  const { id } = useParams()
  const [home, sethome] = useState(null)
  const [imgError, setImgError] = useState(false)

  useEffect(() => {
    const homefunc = async () => {
      const request = await fetch(`http://localhost:4090/home/${id}`)
      const result = await request.json()
      sethome(result)
    }

    homefunc()
  }, [])

  return (
    <>
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
              <button className="hd-share-btn">Share</button>
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
              <h4>Hosted by {home?.home?.propertyName?.split(" ")[0] || "Host"}</h4>
              <p>Superhost · 4 years hosting</p>
            </div>
          </div>

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

            <div className="hd-date-picker">
              <div className="hd-date-field">
                <label>Check-in</label>
                <span>Add date</span>
              </div>
              <div className="hd-date-field">
                <label>Checkout</label>
                <span>Add date</span>
              </div>
            </div>

            <div className="hd-guest-select">
              <label>Guests</label>
              <span>1 guest</span>
            </div>

            <button className="hd-book-btn">Reserve Now</button>

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
                <span>₹{Number(home?.home?.price || 0) + 800}</span>
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
