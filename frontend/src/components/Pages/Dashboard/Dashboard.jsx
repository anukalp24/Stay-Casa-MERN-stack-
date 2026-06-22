import React from 'react'
import { useState , useContext  , useEffect} from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import Host from '../Host/Host'
import { info } from '../..'
import "./Dashboard.css"
import Navbar from '../../Navbar/Navbar'
const Dashboard = () => {
  const navigate = useNavigate()
const { form , setform , setresponse , response} = useContext(info)

const [dashboard, setdashboard] = useState([]) 



useEffect(() => {
const getdashboardhomes =  async ()=>{
  const api = await fetch(`http://localhost:4090/dashboard` , {
    method: "GET",
    headers:{
      authorization: localStorage.getItem("token")
    }

  })
  const dashboardHomes = await api.json()
  setdashboard(dashboardHomes)
  //  becuase find alredy retuns an array thats why just ()
}

getdashboardhomes()
}, [])
 
const handleedit  =(home)=>{
  setform(home)
 const newItem = dashboard.filter(val => {
    return val._id !== home._id
  })
// filter removes
  setdashboard(newItem)
navigate("/Host")
}

const HandleDelete =  async (id)=>{
 let api =  await fetch(
      `http://localhost:4090/deletehome/${id}`,{
method: "DELETE",
headers: {
  authorization: localStorage.getItem("token")
}

      }

  )
  if(api.ok){
    const newitem  = dashboard.filter(val=>{
      return val._id !== id
    })
    setdashboard(newitem)

    const newResponse = response.filter((val)=>(
      val._id !==id
    ))

    setresponse(newResponse)

  }
}
    
return (
      <div>
        <Navbar/>
<div className="success-container">

<div className="success-hero">
<h1>Your Property Has Been Added 😄</h1>

{ <p>
Your listing is now live and ready for travelers around the world.
Manage your stays, pricing and bookings like Airbnb.
</p> }
</div>
<div className="property-wrapper">

{dashboard.map((val , index)=>(

<div key={index} className="box">

<img src={val.file} alt="" />

<div className="property-content">

<h2>{val.propertyName}</h2>
<h2>{val.category}</h2>
<p>{val.cityname}</p>

<p className="price">₹{val.price}</p>

<p className="rating">⭐ {val.rating}</p>

<p>{val.desc}</p>
<button onClick={()=>HandleDelete(val._id)} className="delete-btn">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M19 7L18.133 19.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M9 7V4a1 1 0 011-1h4a1 1 0 011 1v3m-7 0h8"
    />
  </svg>

  Delete
</button>

<button  onClick={()=>handleedit(val)} className="edit-btn">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.586-9.414a2 2 0 112.828 2.828L12 14l-4 1 1-4 8.414-8.414z"
    />
  </svg>
  Edit
</button>
</div>

</div>

))}

</div>

</div>
    </div>
  )
}

export default Dashboard
