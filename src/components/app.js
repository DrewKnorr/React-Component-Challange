import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/home"
import NavBar from "./nav-bar/navBar"
import NumBtn from "./pages/num-btn"
import Message from "./pages/mesg-btn"
import Clock from "./pages/clock"
import FontSize from "./pages/font-size"
import ColorChange from "./pages/color-change"
import Align from "./pages/align-text-btn"
import About from "./pages/about"

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1 className="title">React Challanges</h1>
        
        <div className='nav-bar'>
          <NavBar/>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/num-btn" component={NumBtn}/>
          <Route path="/mesg-btn" component={Message}/>
          <Route path="/font-size" component={FontSize}/>
          <Route path="/color-change" component={ColorChange}/>
          <Route path="/align-text-btn" component={Align}/>
          <Route path="/clock" component={Clock}/>
        </div>
        <h2 className="signiture-wrapper">Authored By: <h1 className="signiture">Andrew Knorr</h1></h2>
      </div>
    );
  }
}
