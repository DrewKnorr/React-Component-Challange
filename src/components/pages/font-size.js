import React, { Component} from "react";




export default class FontSize extends Component{
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
        alert('Your Font Size Is: ' + this.state.value);
        event.preventDefault();
      }
    
      render() {
        return (
            <form className="font-wrapper" onSubmit={this.handleSubmit}>
                <h1 style={{fontSize : this.state.value}}>Hey Look At That Font Size!</h1>
                <h5 className="size-header">(You Must Add A Unit Such As: px, pt, rem, em, etc)</h5>
                <label>
                    Enter Font Size:
                    <input value={this.state.value} onChange={this.handleChange}/>
                </label>
            </form>
        )
      }
    
}