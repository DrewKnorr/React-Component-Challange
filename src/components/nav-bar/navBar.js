import React, { Component} from "react";
import {NavLink } from "react-router-dom";


export default class NavBar extends Component{
    render(){
        return (
            <div className="nav-wrapper">
                <div className="nav-link-wrapper">
                    <NavLink exact to="/" activeClassName="nav-link">Home</NavLink>
                </div>
                <div className="nav-link-wrapper">
                    <NavLink to="/num-btn" activeClassName="nav-link">Number Control</NavLink>
                </div>
                <div className="nav-link-wrapper">
                    <NavLink to="/mesg-btn" activeClassName="nav-link">Hidden Message Control</NavLink>
                </div>
                <div className="nav-link-wrapper">
                    <NavLink to="/font-size" activeClassName="nav-link">Size Control</NavLink>
                </div>
                <div className="nav-link-wrapper">
                    <NavLink to="/align-text-btn" activeClassName="nav-link">Alignmnet Control</NavLink>
                </div>
                <div className="nav-link-wrapper">
                    <NavLink to="/color-change" activeClassName="nav-link">Color Control</NavLink>
                </div>
                <div className="nav-link-wrapper">
                    <NavLink  to="/clock" activeClassName="nav-link">Clock</NavLink>
                </div>
            </div>
        )
    }
}