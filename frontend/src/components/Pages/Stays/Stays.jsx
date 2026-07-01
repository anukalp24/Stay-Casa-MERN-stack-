import React from 'react'
import "./Stays.css"
import { useState , useEffect , useContext } from 'react'
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { info } from '../..'
import Navbar from 'components/Navbar/Navbar'
import Footer from 'components/Footer/Footer'
const Card = () => {
  const { handleStay , handlewishlist , allHomes ,  setallHomes} = useContext(info)
  const [conditional, setconditional] = useState(false)
const [priceFilteredHomes, setpriceFilteredHomes] = useState([])
const [price, setprice] = useState([0 , 100000])
const [page, setPage] = useState(1)

useEffect(() => {
const FetchHomes = async ()=>{
    const api =   await fetch(`http://localhost:4090/?page=${page}`)
    const result  = await api.json()
    setallHomes(result)
}
FetchHomes()
}, [page])



const handleAdd =  async()=>{
  const request = await fetch(`http://localhost:4090/priceFilter` , {
    headers:  {"Content-Type":"application/json"},
    method: "POST",
    body: JSON.stringify({price})
  })


  if(!request.ok){
    return
  }

  const result = await request.json()
  setpriceFilteredHomes(result)
  setconditional(true)

}




const handlePrev = ()=>{
  if(page <= 1){
    return
  }
  setPage(page - 1)

}


const handleNext = ()=>{
  if(page >= 2){
    return
  }
  setPage(page+1)
}
  return (
    <>
    <Navbar/>
<div className="card-section">

  {conditional === false ? (
    allHomes.map((homes, index) => (
      <div
        key={index}
        onClick={() => handleStay(homes._id)}
        className="airbnb-card"
      >
        <div className="airbnb-image-wrapper">
          <img
            className="airbnb-image"
            src={homes.file}
            alt={homes.propertyName}
          />

          <svg
            onClick={(e) => {
              e.stopPropagation();
              handlewishlist(homes);
            }}
            className="heart-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>

        <div className="airbnb-content">
          <div className="airbnb-row">
            <span className="location">
              {homes.cityname}, {homes.country}
            </span>

            <span className="rating">
              ★ {homes.rating}
            </span>
          </div>

          <p className="description">
            {homes.desc}
          </p>
        </div>
      </div>
    ))
  ) : (


    priceFilteredHomes?.home?.length === 0 ?(
      <h2>No properties found in this price range.</h2>
    ) : (


      
      priceFilteredHomes?.home?.map((homes, index) => (
        <div
        key={index}
        onClick={() => handleStay(homes._id)}
        className="airbnb-card"
      >
        <div className="airbnb-image-wrapper">
          <img
            className="airbnb-image"
            src={homes.file}
            alt={homes.propertyName}
          />

          <svg
            onClick={(e) => {
              e.stopPropagation();
              handlewishlist(homes);
            }}
            className="heart-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>

        <div className="airbnb-content">
          <div className="airbnb-row">
            <span className="location">
              {homes.cityname}, {homes.country}
            </span>

            <span className="rating">
              ★ {homes.rating}
            </span>
          </div>

          <p className="description">
            {homes.desc}
          </p>
        </div>
      </div>
    ))
  )
  )}

</div>

<div className="pagination">

  <button
    className="pagination-btn"
    onClick={handlePrev}
  >
    &#8249;
  </button>

  <button
    className={`page-btn ${page === 1 ? "active" : ""}`}
    onClick={() => setPage(1)}
  >
    1
  </button>

  <button
    className={`page-btn ${page === 2 ? "active" : ""}`}
    onClick={() => setPage(2)}
  >
    2
  </button>

  <button
    className="pagination-btn"
    onClick={handleNext}
  >
  </button>
</div>
<div className="price-filter">

  <div className="price-values">
    <span>₹{price[0].toLocaleString()}</span>
    <span>₹{price[1].toLocaleString()}</span>
  </div>

  <Slider
    onChange={setprice}
    range
    className="horizontal-slider"
    thumbClassName="thumb"
    trackClassName="track"
    value={price}
    min={0}
    max={100000}
    step={500}
    allowCross={false}
  />

  <button
    className="filter-btn"
    onClick={handleAdd}
  >
    Apply Filters
  </button>

</div>

<Footer/>
  </>        
  )
}
export default Card