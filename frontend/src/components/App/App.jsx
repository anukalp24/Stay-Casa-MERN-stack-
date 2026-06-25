import './App.css'
import {Routes , Route} from "react-router-dom"
import About from '../Pages/FooterPages/About/About'
import Contact from '../Pages/Contact/Contact'
import Home from '../Pages/Home/Home'
import Host from '../Pages/Host/Host'
import Dashboard from '../Pages/Dashboard/DashboardHomes'
import DashboardDetails from "../Pages/Dashboard/DashboardHomesDetails"
import { useState , useEffect } from 'react'
import Wishlist from '../Pages/Wishlist/Wishlist'
import Login from '../Pages/Login/Login'
import ForgotPassword from '../Pages/ForgetPassword/ForgotPassword'
import ResetPassword from '../Pages/ForgetPassword/ResetPassword'
import HomeDetails from '../Pages/HomeDetails/HomeDetails'
import Search from '../Pages/Search/Search'
import Stays from "../Pages/Stays/Stays"
import Categories from '../Pages/Categories/Categories'
import { useNavigate } from 'react-router-dom'
import { info } from '..'
function App() {
  const navigate = useNavigate()

const [response, setresponse] = useState([])
const [wishlist, setwishlist] = useState([])
const [search, setsearch] = useState("")
const [searchResult, setsearchResult] = useState(null)
const [form, setform] = useState({
propertyName: "",
category: "",
country: "",
cityname: "",
price:"",
rating: "",
desc: "",
})
const [dashboard, setdashboard] = useState([]) 
useEffect(() => {
const FetchHomes = async ()=>{
    const api =   await fetch("http://localhost:4090/")
    const response2 = await api.json()
    setresponse(response2)
}
FetchHomes()
}, [])
 

const handleStay = (id)=>{
  navigate(`/home/${id}`)
}


// useEffect(() => {
// const wishlist = async ()=>{
//     const api =   await fetch("http://localhost:4090/wishlist")
//     const response2 = await api.json()
//     setwishlist(response2)
//   }
//   wishlist()

// }, [])

  return (
    <>
  <info.Provider value={{response , setresponse , form , setform , wishlist , setwishlist , search , setsearch , searchResult, setsearchResult , handleStay , dashboard , setdashboard}}>
<Routes>
<Route path='/' element={<Home/>}></Route>
<Route path='/About' element={<About/>}></Route>
<Route path='/Contact' element={<Contact/>}></Route>
<Route path='/Host' element={<Host/>}></Route>
<Route path='/Wishlist' element={<Wishlist/>}></Route>
<Route path="/dashboard" element={<Dashboard/>}></Route>
<Route path="/auth" element={<Login/>}></Route>
<Route path='/forgot-password' element={<ForgotPassword />}></Route>
<Route path='/reset-password/:token' element={< ResetPassword/>}></Route>
<Route  path='/home/:id' element={<HomeDetails/>} ></Route>
<Route path='/search' element={<Search/>} ></Route>
<Route path='/stays' element={<Stays/>} ></Route>
<Route path='/categories' element={<Categories/>} ></Route>
<Route path='/dashboardHomesDetails/:_id' element={<DashboardDetails/>}></Route>
</Routes>
  </info.Provider>
    </>
  )
}
export default App
