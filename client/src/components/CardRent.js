import React from "react";
import { Link } from "react-router-dom";

const CardRent = (props) => {
  return (
    <div className="col-md-6 mt-5">
      <div className="card">
        <img src={props.image} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.bedroom}</p>
          <p className="card-text">{props.description}</p>
          <Link className="btn btn-primary" to={`/propertyrent/${props.id}`}>
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardRent;
