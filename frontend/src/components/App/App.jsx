import './App.css'
import {Routes , Route} from "react-router-dom"
import About from '../Pages/FooterPages/About/About'
import Stays from "../Pages/Stays/Stays"
import Contact from '../Pages/Contact/Contact'
import Home from '../Pages/Home/Home'
import Host from '../Pages/Host/Host'
import Dashboard from '../Pages/Dashboard/Dashboard'
import { useState , useEffect } from 'react'
import Wishlist from '../Pages/Wishlist/Wishlist'
import Login from '../Pages/Login/Login'
import { info } from '..'
function App() {
const [response, setresponse] = useState([])
const [wishlist, setwishlist] = useState([])

const [form, setform] = useState({
propertyName: "",
cityname: "",
price:"",
rating: "",
desc: ""
})
useEffect(() => {
const FetchHomes = async ()=>{

    const api =   await fetch("http://localhost:4090/")
    const response2 = await api.json()
    setresponse(response2)
}
FetchHomes()

}, [])
useEffect(() => {
const wishlist = async ()=>{
    const api =   await fetch("http://localhost:4090/wishlist")
    const response2 = await api.json()
    setwishlist(response2)
  }
  wishlist()

}, [])

  return (
    <>
  <info.Provider value={{response , setresponse , form , setform , wishlist , setwishlist}}>
<Routes>
<Route path='/' element={<Home/>}></Route>
<Route path='/About' element={<About/>}></Route>
<Route path='/stays' element={<Stays/>}></Route>
<Route path='/Contact' element={<Contact/>}></Route>
<Route path='/Host' element={<Host/>}></Route>
<Route path='/Wishlist' element={<Wishlist/>}></Route>
<Route path="/dashboard" element={<Dashboard/>}></Route>
<Route path="/auth" element={<Login/>}></Route>
</Routes>
  </info.Provider>
    </>
  )
}
export default App
