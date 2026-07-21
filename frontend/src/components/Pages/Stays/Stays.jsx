import React from 'react'
import "./Stays.css"
import { useState , useEffect , useContext } from 'react'
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { info } from '../..'
import Navbar from 'components/Navbar/Navbar'
import Footer from 'components/Footer/Footer'
import { useNavigate } from 'react-router-dom';
import {
  FaStar,
  FaHeart,
  FaMapMarkerAlt,
  FaWifi,
  FaSwimmingPool,
  FaParking,
  FaSnowflake,
  FaBed,
  FaBath,
  FaUsers,
} from "react-icons/fa";

import {
  MdSearch,
  MdKeyboardArrowDown,
} from "react-icons/md";




const Card = () => {
  const navigate = useNavigate()
  const { handleStay , handlewishlist} = useContext(info)
const [price, setprice] = useState([0 , 100000]) // slider state
const [appliedPrice, setappliedPrice] = useState([0 , 100000]) // actual price filter state
const [page, setPage] = useState(1)
const [allHomes, setallHomes] = useState([])
const [search, setsearch] = useState("")





useEffect(() => {
const FetchHomes = async ()=>{
    const api =   await fetch(`http://localhost:4090/?page=${page}&minPrice=${appliedPrice[0]}&maxPrice=${appliedPrice[1]}`)
    const result  = await api.json()
    setallHomes(result)
}

FetchHomes()
}, [page , appliedPrice])


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


<div className="stays-page">

  {/* Search */}

  <div className="search-bar">

    <input value={search} onChange={(e)=>setsearch(e.target.value)}
      type="text"
      placeholder="Search destinations, villas..."
    />
    <button onClick={()=> {localStorage.setItem("search" ,search ) ;  navigate("/search")  }} className="search-btn">
      <MdSearch />
    </button>

  </div>



  <div className="content-wrapper">

    {/* LEFT */}

    <aside className="filters">

      <h3>Filters</h3>

      <div className="filter-section">

        <h4>Price Range</h4>

        <input type="range" />

        <div className="price-values">

          <span>₹1,000</span>

          <span>₹100,000</span>

        </div>

      </div>

    </aside>



    {/* RIGHT */}

    <section className="properties-section">

      <div className="section-top">

        <h2>Luxury Stays</h2>

        <button className="sort-btn">
          Sort By
          <MdKeyboardArrowDown />
        </button>

      </div>



    

{allHomes.map((home , index)=>(
      <div className="property-card">

<>
  <div className="property-image">

          <img src={home.files[0]} alt="" />

          <button className="wishlist-btn">
            <FaHeart />
          </button>

        </div>


        <div className="property-content">

          <div className="property-header">

            <div>

              <h2>{home.propertyName}</h2>

              <p>
                <FaMapMarkerAlt />
                {home.cityname} , {home.country}
              </p>
            </div>
          </div>
          <p className="property-description">{home.desc}</p>

        </div>
        <div className="price-section">

          <span className="starting">
            Starting From
          </span>

          <h2>₹{home.price}</h2>

          <p>/ Night</p>

          <button>
            View Property
          </button>

        </div>
</>

      </div>
))}








      {/* PAGINATION */}

      <div className="pagination">

        <button>{"<"}</button>

        <button className="active">1</button>

        <button>2</button>

        <button>3</button>

        <button>{">"}</button>

      </div>

    </section>

  </div>

</div>




















    {/* <Navbar/>
<div className="card-section">
    {allHomes.map((homes, index) => (
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
    ))}
  



</div>

  <div className="pagination">
{allHomes.length < 5 ? (
<p>Your result</p>

) : (
<>
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
     &#8250;
  </button>
  </>
  )}
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
    onClick={()=>setappliedPrice(price)}
    >
    Apply Filters
  </button>
 

</div>

<Footer/> */}
<Footer/>
  </>        
  )
  }
export default Card