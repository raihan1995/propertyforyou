import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="col-md-6 mt-5">
      <div className="card">
        <img src={props.image} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.bedroom}</p>
          <p className="card-text">{props.description}</p>
          <Link className="btn btn-primary" to={`/property/${props.id}`}>
            View {props.id}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
