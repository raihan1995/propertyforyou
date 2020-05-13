import React, { useState } from "react";

const SearchBar = () => {
  const [location, setLocation] = useState("");
  const [proptype, setProptype] = useState("");
  const [bedroom, setBedroom] = useState("");
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [searchData, setSearchData] = useState([]);
  // console.log(searchData)
  // console.log(
  //   "location " +
  //     location +
  //     " prop " +
  //     proptype +
  //     " bedroom " +
  //     bedroom +
  //     " min " +
  //     min +
  //     " max " +
  //     max
  // );

  const onSearchButton = async (e) => {
    e.preventDefault();
    try {
      // http://localhost:5000/properties/1/80000/luton/flat/1
      const response = await fetch(
        `http://localhost:5000/properties/${min}/${max}/${location}/${proptype}/${bedroom}`
      );
      const locationData = await response.json();
      setSearchData(locationData);
      // console.table(locationData);
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <div>
      {/* <form className="text-center mt-5"> */}
      <div className="form-row">
        <div className="col-6 col-md-3 col-xl-2">
          <label htmlFor="location">Location</label>
          <input
            id="location"
            name="location"
            type="text"
            className="form-control"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter location"
          ></input>
          <AutoComplete />
        </div>
        <div className="col-6 col-md-3 col-xl-2">
          <label htmlFor="propertytype">Property Type</label>
          <select
            id="propertytype"
            name="propertytype"
            className="form-control"
            value={proptype}
            onChange={(e) => setProptype(e.target.value)}
          >
            {/* <option>Property Type...</option> */}
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
            <option defaultValue>Bedrooms</option>
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
            <option defaultValue>Min Price</option>
            <option>10000</option>
            <option>20000</option>
            <option>100000</option>
            <option>200000</option>
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
            <option defaultValue>Max Price</option>
            <option>20000</option>
            <option>50000</option>
            <option>100000</option>
            <option>200000</option>
          </select>
        </div>
        <div className="col-6 col-md-3 col-xl-2 d-flex align-content-end flex-wrap">
          <button className="btn btn-success" onClick={onSearchButton}>
            Search
          </button>
        </div>
      </div>
      {/* </form> */}
    </div>
  );
};

export default SearchBar;
