import React, { Component} from "react";




export default class Align extends Component{
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {

        event.preventDefault();
      }
    
      render() {
        return (
            <form className="align" onSubmit={this.handleSubmit}>
                <h1 style={{alignSelf:this.state.value, fontSize: '45px'}}>Hey Look Where I Am!</h1>
                
                <h4>Enter Alignment: </h4>
                <label>
                    <button type="text" value="flex-start" onClick={this.handleChange}>Left</button>
                    <button type="text" value="center" onClick={this.handleChange}>Middle</button>
                    <button type="text" value="flex-end" onClick={this.handleChange}>Right</button>
                </label>
            </form>
        )
      }
    
}