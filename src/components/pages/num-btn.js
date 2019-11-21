import React, { Component} from "react";



export default class NumControl extends Component{
    constructor(){
        super();

        this.state = {
            number: 0
        }
    }

    increase = () => {
        this.setState({number: this.state.number +1})
    }

    decrease = () => {
        this.setState({number: this.state.number -1})
    }

    render(){
        return(
            <div className="num-wrapper">
                <button type="text" onClick={this.increase} >Increase</button>
                <h1>{this.state.number}</h1>
                <button type="text" onClick={this.decrease}> Decrease</button>

            </div>
        )
    }
}