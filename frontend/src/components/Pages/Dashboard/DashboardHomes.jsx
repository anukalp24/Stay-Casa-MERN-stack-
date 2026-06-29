import React from 'react'
import { useState  , useEffect , useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { info } from '../..'
import "./DashboardHomes.css"
import Navbar from '../../Navbar/Navbar'
const Dashboard = () => {
  const navigate = useNavigate()

const {dashboard , setdashboard} = useContext(info)
const [loader, setloader] = useState(true)




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
  setloader(false)
}

getdashboardhomes()
}, [])
 


  
return (
  <>


      {loader === true ? (
<div className="loader-parent">
    <div className="loader"></div>
  </div>

): (
  

  <>
  
  
  <Navbar/>
<div className="dashboard-all-page">

  <div className="dashboard-all-header">
    <h1>My Properties</h1>
    <p>{dashboard.length} properties listed</p>
  </div>

  <div className="dashboard-all-grid">

    {dashboard.map((val,index)=>(
      <div onClick={()=> {navigate(`/dashboardHomesDetails/${val._id}`)}}
      key={index}
      className="dashboard-all-card"
      >

        <img
          className="dashboard-all-card-img"
          src={val.file}
          alt={val.propertyName}
          />

        <div className="dashboard-all-card-body">

          <h3 className="dashboard-all-card-title">
            {val.propertyName}
          </h3>

          <p className="dashboard-all-card-location">
            📍 {val.cityname}
          </p>

          <p className="dashboard-all-card-category">
            {val.category}
          </p>

          <p className="dashboard-all-card-desc">
            {val.desc}
          </p>

          <div className="dashboard-all-card-divider"></div>

          <div className="dashboard-all-card-footer">

            <span className="dashboard-all-card-price">
              ₹{val.price}
            </span>

            <span className="dashboard-all-card-rating">
              ⭐ {val.rating}
            </span>

          </div>
        </div>

      </div>

))}

  </div>

</div>
</>
    )}
      </>
   
  )
}

export default Dashboard
