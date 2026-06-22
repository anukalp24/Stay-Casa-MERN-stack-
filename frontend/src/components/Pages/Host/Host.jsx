import React from 'react'
import "./Host.css"
import Navbar from '../../Navbar/Navbar'
import Footer from '../../Footer/Footer'
import { useState , useContext  ,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { info } from '../..'
const Host = () => {
  const [file, setfile] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
   const token = localStorage.getItem("token")
     console.log("TOKEN =", token)
   if(!token){
    navigate("/auth")
   }
  }, [])
  
const [error, seterror] = useState("")

  const {response , setresponse , form , setform} = useContext(info)


  const handleImage = (e)=>{
    setfile(...e.target.files)
  }

const handlechange = (e)=>{

    setform({...form ,[e.target.name] : e.target.value})
    seterror({
      ...error , [e.target.name] : ""
    })
}

const handleadd =  async (e)=>{
    e.preventDefault()

    const newErrors = {}
    if(form.propertyName  === ""){
      newErrors.propertyName = "Property name field is required" 
    }

    if(form.category === ""){
      newErrors.category = "Category field is required"
    }
      if( form.cityname === ""){
   newErrors.cityname = "City name is required" 
      } 
      if( form.country === ""){
   newErrors.cityname = "City name is required" 
      } 
      
    if(form.price  === ""){
         newErrors.price = "Price field is required" 
    }
    if(form.rating === ""){
   newErrors.rating = "rating field is required" 

    }
    
    
    if(!file){
   newErrors.url =  "url is required" 

    }
    
    if(form.desc === "" ){
       newErrors.desc = "Description is required" 

    }
    seterror(newErrors)

  if(Object.keys(newErrors).length > 0){
    return
  }
// solution in progress.
console.log(form)
if(form._id){
   console.log("this is update request")
  let updateRequest = await fetch(`http://localhost:4090/edithome/${form._id}`,{
    method: "PUT",
    headers: {
    "Content-Type":"application/json"       
},
         body:JSON.stringify(form)
        })
        console.log(updateRequest)
        
let updateResult = await updateRequest.json()
setresponse([...response ,updateResult])
}
else{

  const formData = new FormData()   // creates an empty container lika a bag 


  formData.append("propertyName" , form.propertyName)
formData.append("category" ,form.category )
formData.append(
  "cityname",
  form.cityname
)
formData.append(
  "country",
  form.country
)

formData.append(
  "price",
  form.price
)

formData.append(
  "rating",
  form.rating
)

formData.append(
  "desc",
  form.desc
)

formData.append("image" , file)

  let request2 = await fetch("http://localhost:4090/addhome" , {
    method: "post",
    headers: {
      Authorization: localStorage.getItem("token")
      // sending authorization token aswell.
    },
    body: formData
  })
  let result =  await request2.json()
  setresponse([...response ,result])

  navigate("/dashboard")
}
setform({
   propertyName:"",
   category: "",
   cityname:"",
   country: "",
   price:"",
   rating:"",
   desc:"",
})

}


  return (
    <>
<Navbar/> 
    <div className="host-container">
     <div className="heading-section">
        <h2>Become a Host</h2>
        <p>List your property and earn money.</p>
     </div>   {/* heading sec div */}
   <form>
<input value={form.propertyName} name='propertyName'   onChange={handlechange}  placeholder='Property Name' id='property-name' type="text" />
   {error.propertyName && <p id= "error">{error.propertyName}</p> }


   <input  placeholder='Category'  onChange={handlechange}  value={form.category} name='category' type="text" />
{error.category && <p id= "error">{error.category}</p>  }
<input value={form.cityname} name='cityname'   onChange={handlechange}  placeholder='City' id='city-name' type="text" />
   {error.cityname && <p id= "error">{error.cityname}</p> }
<input value={form.country} name='country'   onChange={handlechange}  placeholder='country' id='country' type="text" />
 {error.country && <p id= "error">{error.country}</p> }
<input value={form.price} name='price'  onChange={handlechange}  placeholder='Price Per Night' id='price' type="text" />
 {error.price && <p id= "error">{error.price}</p> }
<input value={form.rating} name='rating'  onChange={handlechange}  placeholder='Rating' id='rating' type="text" />
 {error.rating && <p id= "error">{error.rating}</p> }
<input  onChange={handleImage}  name='photo'  accept="image/*"   placeholder='Image URL' id='img-url' type="file" multiple />
 {error.url && <p id= "error">{error.url}</p> }
<textarea value={form.desc} name='desc'  onChange={handlechange}  placeholder='Description' id='description'></textarea>
 {error.desc && <p id= "error">{error.desc}</p> }
<button onClick={handleadd} type='submit' id='host-submit'>Add Property</button>

</form>
    </div>  {/* host container div */}
    <Footer/>
    </>
  )
}

export default Host