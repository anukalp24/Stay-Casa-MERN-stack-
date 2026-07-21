import "./Hero.css";
import { useContext , useState , useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { info } from "..";
import poolHouse from "../../../dist/assets2/images/herosection.png"
import modernhouse from "../../../dist/assets2/images/modernhouse.png"
import mountainHome from "../../../dist/assets2/images/mountain.png"



import { HiOutlineSearch } from "react-icons/hi";
const Hero = () => {


  const images = [poolHouse , modernhouse , mountainHome]
  
  const [currentImage, setcurrentImage] = useState(0)
  
  
useEffect(() => {
  const interval = setInterval(() => {
    setcurrentImage((prev) => (prev + 1) % images.length);
  }, 5000);

  return () => clearInterval(interval);
}, []);


  const navigate = useNavigate();
  const { search, setsearch } = useContext(info);
  const HandleAdd = () => {
    if (!search.trim()) return;
    localStorage.setItem("search", search);
    navigate("/search");
  };




  return (

  <section className="hero">

    <img
      src={images[currentImage]}
      alt=""
      className="hero-image"
    />

    <div className="hero-left">
      <h1>Your Perfect Stay <br /> Starts Here.</h1>
      <p>Book unique homes and luxury stays around the world.</p>
    </div>

    <div className="hero-search">
      <input
        value={search}
        onChange={(e) => setsearch(e.target.value)}
        placeholder="Search city or property..."
      />
      <HiOutlineSearch
        className="search-icon"
        onClick={HandleAdd}
      />
    </div>

  </section>

  );
};

export default Hero;