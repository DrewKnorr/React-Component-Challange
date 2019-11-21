import React, { Component} from "react";
import {NavLink } from "react-router-dom";




export default class Home extends Component{

    render(){
        return(
            <div className="title-bar">
                <h1>Welcome To The React Coding Challange</h1>
                <div className="img-wrapper"><NavLink exact to="/about" className="hidden-link">About The Project</NavLink></div> 
            </div>
            
        )
    }
}