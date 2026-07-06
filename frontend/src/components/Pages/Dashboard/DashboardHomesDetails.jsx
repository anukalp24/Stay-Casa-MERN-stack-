import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { info } from "../..";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import "./DashboardHomesDetails.css";
import fetchWithRefresh from "../../../Utils/fetchWithRefresh";
const DashboardHomesDetails = () => {
  const { _id } = useParams();

  const navigate = useNavigate();
  const [dashboardHomeDetails, setdashboardHomeDetails] = useState();
  const { setform, setresponse, response, setdashboard, dashboard } =
    useContext(info);

  useEffect(() => {
    async function dashbaordDetails() {
      const req = await fetch(
        `http://localhost:4090/dashboardHomeDetails/${_id}`,
      );
      const result = await req.json();
      setdashboardHomeDetails(result);
    }

    dashbaordDetails();
  }, []);

  const HandleDelete = async (id) => {
    let api = await  fetchWithRefresh(`http://localhost:4090/deletehome/${id}`, {
      method: "DELETE",
      headers: {
        authorization: localStorage.getItem("token"),
      },
      credentials: "include"
    });


    if (api.ok) {
      const newitem = dashboard.filter((val) => {
        return val._id !== id;
      });
      setdashboard(newitem);
      setdashboardHomeDetails(null);

      const newResponse = response.filter((val) => val._id !== id);

      setresponse(newResponse);
    }
  };

  const handleedit = (home) => {
    setform(home);
    const newItem = dashboard.filter((val) => {
      return val._id !== home._id;
    });
    // filter removes
    setdashboard(newItem);
    navigate("/Host");
  };

  return (
    <>
      <Navbar />
      {dashboardHomeDetails ? (
        <div className="dashboardhomesdetails-wrapper">
          <div className="dashboardhomesdetails-image-section">
            <img
              className="dashboardhomesdetails-image"
              src={dashboardHomeDetails?.home?.file}
            />
          </div>

          <div className="dashboardhomesdetails-content">
            <h1 className="dashboardhomesdetails-title">
              {dashboardHomeDetails?.home?.propertyName}
            </h1>

            <p className="dashboardhomesdetails-location">
              📍 {dashboardHomeDetails?.home?.cityname}
            </p>

            
            <span className="dashboardhomesdetails-category">
              {dashboardHomeDetails?.home?.category}
            </span>

            <p className="dashboardhomesdetails-description">
              {dashboardHomeDetails?.home?.desc}
            </p>

            <div className="dashboardhomesdetails-divider" />

            <div className="dashboardhomesdetails-footer">
              <span className="dashboardhomesdetails-price">
                ₹{dashboardHomeDetails?.home?.price} / night
              </span>
              <span className="dashboardhomesdetails-rating">
                ⭐ {dashboardHomeDetails?.home?.rating}
              </span>
            </div>

            <div className="dashboardhomesdetails-actions">
              <button
                onClick={() => handleedit(dashboardHomeDetails.home)}
                className="dashboardhomesdetails-edit-btn"
              >
                Edit
              </button>
              <button
                onClick={() => HandleDelete(dashboardHomeDetails.home._id)}
                className="dashboardhomesdetails-delete-btn"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p>nothing found</p>
      )}

      <Footer />
    </>
  );
};

export default DashboardHomesDetails;
