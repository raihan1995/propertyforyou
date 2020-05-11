import React, { useState } from "react";
import CardRent from "../components/CardRent";
import AutoComplete from "../components/utilities/AutoComplete";
// import { Link } from "react-router-dom";

// Fetch data from API
// store fetch data into useState
// Loop this data out into the card component

const Rent = () => {
  const [location, setLocation] = useState("");
  const [propertytype, setPropertytype] = useState("");
  const [bedroom, setBedroom] = useState("");
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [searchData, setSearchData] = useState([]);
  // console.log(searchData)
  console.log(
    "location " +
      location +
      " prop " +
      propertytype +
      " bedroom " +
      bedroom +
      " min " +
      min +
      " max " +
      max
  );

  const onSearchButton = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:5000/propertiesrent/${min}/${max}/${location}/${propertytype}/${bedroom}`
      );
      const locationData = await response.json();
      setSearchData(locationData);
      console.table(locationData);
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <div className="container mt-5">
      <h1>Rent</h1>
      {/* <form className="text-center mt-5"> */}
      <div className="form-row">
        <div className="col-6 col-md-3 col-xl-2">
          <label htmlFor="location">Location</label>
          {/* <input
            id="location"
            name="location"
            type="text"
            className="form-control"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter location"
          ></input> */}
          <AutoComplete
            value={location}
            setLocation={setLocation}
            items={[
              "London",
              "Leicester",
              "Manchester",
              "Birmingham",
              "Liverpool",
              "Luton",
            ]}
          />
        </div>
        <div className="col-6 col-md-3 col-xl-2">
          <label htmlFor="propertytype">Property Type</label>
          <select
            id="propertytype"
            name="propertytype"
            className="form-control"
            value={propertytype}
            onChange={(e) => setPropertytype(e.target.value)}
          >
            <option defaultValue>-</option>
            <option>house</option>
            <option>flat</option>
            <option>land</option>
          </select>
        </div>
        <div className="col-6 col-md-3 col-xl-2">
          <label htmlFor="bedroom">Bedrooms</label>
          <select
            id="bedroom"
            name="bedroom"
            className="form-control"
            value={bedroom}
            onChange={(e) => setBedroom(e.target.value)}
          >
            <option defaultValue>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>

        <div className="col-6 col-md-3 col-xl-2">
          <label htmlFor="min">Min Price:</label>
          <select
            id="min"
            name="min"
            className="form-control"
            value={min}
            onChange={(e) => setMin(e.target.value)}
          >
            <option defaultValue>0</option>
            <option>250</option>
            <option>500</option>
            <option>750</option>
            <option>1000</option>
            <option>1250</option>
            <option>1500</option>
            <option>1750</option>
            <option>2000</option>
          </select>
        </div>

        <div className="col-6 col-md-3 col-xl-2">
          <label htmlFor="max">Max Price:</label>
          <select
            id="max"
            name="max"
            className="form-control"
            value={max}
            onChange={(e) => setMax(e.target.value)}
          >
            <option defaultValue>0</option>
            <option>250</option>
            <option>500</option>
            <option>750</option>
            <option>1000</option>
            <option>1250</option>
            <option>1500</option>
            <option>1750</option>
            <option>2000</option>
          </select>
        </div>
        <div className="col-6 col-md-3 col-xl-2">
          <button className="btn btn-success mt-5" onClick={onSearchButton}>
            Search
          </button>
        </div>
      </div>
      <div className="container mt-5">
        {
          <div className="row">
            {searchData.map((item) => (
              <CardRent
                key={item.id}
                id={item.id}
                name={"£" + item.price}
                bedroom={"Bedroom: " + item.bedroom}
                description={item.description}
                image="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              />
            ))}
          </div>
        }
      </div>
    </div>
  );
};

export default Rent;
