import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//components
import Navbar from "./components/Navbar";

// pages
import Home from "./pages/Home";
import Search from "./pages/Search";
import SingleProperty from "./pages/SingleProperty";
import Sell from "./pages/Sell";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/search" component={Search}></Route>
        <Route exact path="/property/:id" component={SingleProperty}></Route>
        <Route exact path="/sell" component={Sell}></Route>
      </Switch>
    </Router>
  );
}

export default App;
