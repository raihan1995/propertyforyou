import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleProperty = () => {
  let { id } = useParams();
  let [data, setData] = useState(null);

  const grabData = async () => {
    try {
      const response = await fetch(`http://localhost:5000/property/${id}`);
      let temp = await response.json();
      console.table(temp);
      setData(temp);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    grabData();
  }, []);

  if (data === null) {
    return <h1>Loading... please wait</h1>;
  } else {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 mt-5">
            <div className="card">
              <img src={data[0].image} className="card-img-top" alt=""></img>
              <div className="card-body">
                <h5 className="card-title">Full Description</h5>
                <p className="card-text">{data[0].description}</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-5">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{data[0].address}</h5>
                <p className="card-text">Price: {data[0].price}</p>

                <p className="card-text">Bedroom: {data[0].bedroom}</p>

                <p className="card-text">Postcode: {data[0].postcode}</p>

                <p className="card-text">Number: {data[0].number}</p>
                <p className="card-text">Property Reference: #{id}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default SingleProperty;
