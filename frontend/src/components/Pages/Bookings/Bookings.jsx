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
      
      const bookedHomes = await fetchWithRefresh(`http://localhost:4090/bookings`, {
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
          setLoading(false)
        }
        
        
      }
      
      catch (error) {
         setbookings([]);

      }

      finally{
        setLoading(false)
      }
      
    }
    bookingFunc()
  }, [])



const handleDelete = async(id)=>{
const req = await fetchWithRefresh(`http://localhost:4090/delete-booking/${id}` , {
  method: "DELETE",
  headers: {
    authorization: localStorage.getItem("accessToken")
  } ,
  credentials: "include"
})


if(req.ok){
 const deleted =  bookings.filter((booking)=>(
  booking._id !== id
))
setbookings(deleted)
}
}

  return (
    <>
      <Navbar />
     <div className="bookings-page">



    <div className="bookings-header">

        <div>

            <h1>My Trips</h1>

            <p>
                Manage your upcoming and previous bookings.
            </p>

        </div>

    </div>

   

    <div className="booking-stats">

        <div className="stat-card">

            <h2>{bookings.length}</h2>

            <span>Total Trips</span>

        </div>

        <div className="stat-card">

            <h2>₹{
                bookings.reduce(
                    (sum, booking) => sum + booking.totalPrice,
                    0
                )
            }</h2>

            <span>Total Spent</span>

        </div>

        <div className="stat-card">

            <h2>
                {
                    bookings.filter(
                        booking =>
                            booking.paymentStatus === "Paid"
                    ).length
                }
            </h2>

            <span>Confirmed</span>

        </div>

    </div>



    <div className="booking-list">

        {

            bookings.map((booking) => (

                <div
                    className="booking-card"
                    key={booking._id}
                >


                    <div className="booking-image">

                        <img
                            src={booking.file}
                            alt={booking.propertyName}
                        />

                    </div>

               

                    <div className="booking-right">

                    

                        <div className="booking-top">

                            <div>

                                <h2>

                                    {booking.propertyName}

                                </h2>

                                <div className="location">

                                    <MapPin size={16} />

                                    <span>

                                        {booking.cityname}

                                    </span>

                                </div>

                            </div>

                            <span className="status paid">

                                {booking.paymentStatus}

                            </span>

                        </div>

                   

                        <p className="booking-description">

                            {booking.desc}

                        </p>

                    

                        <div className="booking-info">

                            <div>

                                <CalendarDays size={18}/>

                                <div>

                                    <small>Check In</small>

                                    <p>

                                       {new Date(booking.checkIn).toLocaleDateString()}

                                    </p>

                                </div>

                            </div>

                            <div>

                                <CalendarDays size={18}/>

                                <div>

                                    <small>Check Out</small>

                                    <p>

                                        {new Date(booking.checkOut).toLocaleDateString()}

                                    </p>

                                </div>

                            </div>

                            <div>

                                <CreditCard size={18}/>

                                <div>

                                    <small>Total Paid</small>

                                    <p>

                                        ₹{booking.totalPrice}

                                    </p>

                                </div>

                            </div>

                        </div>



                    </div> 

                </div> 

            ))

        }

    </div> 
</div> 

<Footer />

    </>
  )
}

export default Bookings
