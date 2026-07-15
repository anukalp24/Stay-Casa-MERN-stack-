import React from 'react'
import "./Bookings.css"
import fetchWithRefresh from '../../../Utils/fetchWithRefresh'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../Navbar/Navbar'
import Footer from '../../Footer/Footer'
import { CalendarDays, MapPin, CreditCard, Loader2 } from 'lucide-react'

const Bookings = () => {
  const [bookings, setbookings] = useState([])
  const [loading, setLoading] = useState(true)
  const Navigate = useNavigate()

  useEffect(() => {
    const bookingFunc = async () => {
      try {
        const bookedHomes = await fetchWithRefresh("http://localhost:4090/bookings", {
          method: "GET",
          headers: {
            authorization: localStorage.getItem("accessToken")
          },
          credentials: "include"
        })

        if (!bookedHomes || !bookedHomes.ok) {
          setbookings([])
        } else {
          const homes = await bookedHomes.json()
          setbookings(homes)
        }
      } catch (error) {
        setbookings([])
      } finally {
        setLoading(false)
      }
    }
    bookingFunc()
  }, [])

  const formatDate = (dateStr) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    })
  }

  const getNights = (checkIn, checkOut) => {
    const diff = new Date(checkOut) - new Date(checkIn)
    return Math.ceil(diff / (1000 * 60 * 60 * 24))
  }

  return (
    <>
      <Navbar />

      <div className="bookings-wrapper">

        <div className="bookings-header">
          <h1>Your Bookings</h1>
          <p>Manage and view all your upcoming and past reservations</p>
          <div className="bookings-header-line" />
        </div>

        {loading ? (
          <div className="bookings-loader">
            <Loader2 className="spinner-icon" size={32} />
            <p>Loading your bookings...</p>
          </div>
        ) : bookings.length > 0 ? (

          <div className="bookings-grid">
            {bookings.map((booking, index) => (
              <div key={booking._id || index} className="booking-card">

                <div className="booking-card-image">
                  <img src={booking.file} alt={booking.propertyName} />
                  <span className={`booking-status ${booking.paymentStatus === 'paid' ? 'status-paid' : 'status-unpaid'}`}>
                    {booking.paymentStatus}
                  </span>
                </div>

                <div className="booking-card-body">
                  <h3 className="booking-property-name">{booking.propertyName}</h3>

                  <div className="booking-location">
                    <MapPin size={14} />
                    <span>{booking.cityname}</span>
                  </div>

                  <p className="booking-desc">{booking.desc}</p>

                  <div className="booking-dates">
                    <div className="booking-date-item">
                      <CalendarDays size={14} />
                      <div>
                        <span className="booking-date-label">Check-in</span>
                        <span className="booking-date-value">{formatDate(booking.checkIn)}</span>
                      </div>
                    </div>
                    <div className="booking-date-divider" />
                    <div className="booking-date-item">
                      <CalendarDays size={14} />
                      <div>
                        <span className="booking-date-label">Check-out</span>
                        <span className="booking-date-value">{formatDate(booking.checkOut)}</span>
                      </div>
                    </div>
                  </div>

                  <div className="booking-footer">
                    <div className="booking-price">
                      <CreditCard size={14} />
                      <span>₹{booking.totalPrice.toLocaleString('en-IN')}</span>
                    </div>
                    <span className="booking-nights">
                      {getNights(booking.checkIn, booking.checkOut)} night{getNights(booking.checkIn, booking.checkOut) > 1 ? 's' : ''}
                    </span>
                  </div>
                </div>

              </div>
            ))}
          </div>

        ) : (

          <div className="bookings-empty">
            <div className="bookings-empty-icon">🏠</div>
            <h2>No bookings yet</h2>
            <p>You haven't made any reservations. Start exploring and book your first stay!</p>
            <button onClick={Navigate("/")}>Explore Stays</button>
          </div>

        )}

      </div>

      <Footer />
    </>
  )
}

export default Bookings
