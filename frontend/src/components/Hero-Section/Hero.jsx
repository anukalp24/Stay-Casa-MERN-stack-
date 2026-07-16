import "./Hero.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { info } from "..";
import poolHouse from "../../../dist/assets2/images/herosection.png"
import modernhouse from "../../../dist/assets2/images/modernhouse.png"
import mountainHome from "../../../dist/assets2/images/mountain.png"
const Hero = () => {
  const navigate = useNavigate();
  const { search, setsearch } = useContext(info);
  const HandleAdd = () => {
    if (!search.trim()) return;
    localStorage.setItem("search", search);
    navigate("/search");
  };

  return (
    <section className="hero">

      <div className="hero-left">

        <span className="hero-tag">
          🏡 Trusted by thousands of travelers
        </span>

        <h1>
          Find your next <br />
          dream stay.
        </h1>

        <p>
          Explore luxury villas, cozy cabins and unique homes
          across the world with StayCasa.
        </p>

        <div className="hero-search">

          <input
            value={search}
            onChange={(e) => setsearch(e.target.value)}
            placeholder="Search city or property..."
          />

          <button onClick={HandleAdd}>
            Search
          </button>

        </div>

      </div>

      <div className="hero-right">

        <img
          src={mountainHome}
         
        />

      </div>

    </section>
  );
};

export default Hero;