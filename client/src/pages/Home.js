import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="homepage-background">
      <div className="container">
        <div className="row">
          <div className="col-12 ">
            <h2 className="display-4 text-center mt-5 text-white font-weight-bold">
              Find a property
            </h2>
            <hr className="my-4" />
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <div className="card">
              <img
                className="card-img-top"
                src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=400"
                alt=""
              />
              <div className="card-body">
                <h4 className="card-title">
                  <a>Purchase a property</a>
                </h4>
                <p className="card-text">Start searching for a property now!</p>

                <Link className="nav-link btn btn-primary" to="/search">
                  For Sale
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <div className="card">
              <img
                className="card-img-top"
                src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=400"
                alt=""
              />
              <div className="card-body">
                <h4 className="card-title">
                  <a>Rent a property</a>
                </h4>
                <p className="card-text">Start searching for a property now!</p>
                <Link className="nav-link btn btn-primary" to="/rent">
                  For Rent
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <div className="card">
              <img
                className="card-img-top"
                src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=400"
                alt=""
              />
              <div className="card-body">
                <h4 className="card-title">
                  <a>Sell a property</a>
                </h4>
                <p className="card-text">List your property for sale now!</p>
                <Link className="nav-link btn btn-primary" to="/sell">
                  Sell
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
