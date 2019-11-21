import React, { Component} from "react";

export default class Clock extends Component{
    constructor(){
        super();

        this.state = {
            time : new Date().toLocaleTimeString()
        }
    }
    tick(){
        this.setState({time:new Date().toLocaleTimeString() }) 
    }

    componentDidMount(){
        this.interval = setInterval(() => this.tick(), 1000);
    }
    
    render(){
    return(
    <div className = "clock">
        <h1>The Time Is Now</h1>
        <h2>{this.state.time}</h2>
    </div>)
    }
    
}

