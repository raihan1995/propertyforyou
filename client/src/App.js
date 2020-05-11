import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UserContext, User } from "./context/UserContext";
//components
import Navbar from "./components/Navbar";

// pages
import Home from "./pages/Home";
import Search from "./pages/Search";
import Rent from "./pages/Rent";
import SingleProperty from "./pages/SingleProperty";
import SinglePropertyRent from "./pages/SinglePropertyRent";
import Sell from "./pages/Sell";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [auth, setAuth] = useState({ isLoggedIn: false });

  return (
    <Router>
      <UserContext.Provider value={{ auth, setAuth }}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/search" component={Search}></Route>
          <Route exact path="/rent" component={Rent}></Route>
          <Route exact path="/property/:id" component={SingleProperty}></Route>
          <Route
            exact
            path="/propertyrent/:id"
            component={SinglePropertyRent}
          ></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/register" component={Register}></Route>
          <ProtectedRoute exact path="/sell" component={Sell}></ProtectedRoute>
        </Switch>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
