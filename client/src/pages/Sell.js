import React, { useState } from "react";
import AutoComplete from "../components/utilities/AutoComplete";

const Sell = () => {
  const [price, setPrice] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [propertytype, setPropertytype] = useState("");
  const [postcode, setPostcode] = useState("");
  const [description, setDescription] = useState("");
  const [bedroom, setBedroom] = useState("");
  const [number, setNumber] = useState("");
  const [image, setImage] = useState("");
  console.log(city);

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const requestBody = {
        price,
        address,
        city,
        propertytype,
        postcode,
        description,
        bedroom,
        number,
        image,
      };
      console.log(requestBody);
      const response = await fetch("http://localhost:5000/property", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 mt-5">
          <form onSubmit={onSubmitForm}>
            <div className="form-group">
              <label htmlFor="price">Price</label>
              <input
                type="number"
                className="form-control"
                id="price"
                placeholder="£"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">address</label>
              <input
                type="text"
                className="form-control"
                id="address"
                placeholder=""
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="city">city</label>
              {/* <input
                type="text"
                className="form-control"
                id="city"
                placeholder=""
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              /> */}
              <AutoComplete
                value={city}
                setLocation={setCity}
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
            <div className="form-group">
              <label htmlFor="propertytype">Property Type</label>
              <select
                id="propertytype"
                className="form-control"
                value={propertytype}
                onChange={(e) => setPropertytype(e.target.value)}
              >
                <option defaultValue>0</option>
                <option>house</option>
                <option>flat</option>
                <option>land</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="postcode">Postcode</label>
              <input
                type="text"
                className="form-control"
                id="postcode"
                placeholder=""
                value={postcode}
                onChange={(e) => setPostcode(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                placeholder=""
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="bedroom">Bedroom</label>
              <select
                id="bedroom"
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
            <div className="form-group">
              <label htmlFor="number">Number</label>
              <input
                type="text"
                className="form-control"
                id="number"
                placeholder=""
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="image">Image</label>
              <input
                type="url"
                className="form-control"
                id="image"
                placeholder=""
                value={image}
                onChange={(e) => setImage(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Sell;
