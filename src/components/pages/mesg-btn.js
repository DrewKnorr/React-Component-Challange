import React, { Component} from "react";




export default class FontSize extends Component{
    constructor(props) {
        super(props);
        this.state = {
            value: 'hidden'
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {

        if(this.state.value==='hidden'){
            this.setState({value : 'visible'})
        }
        else{
            this.setState({value:'hidden'})
        }
        event.preventDefault();
        
      }
    
      render() {
        return (
            <form className="hidden-wrapper" onSubmit={this.handleSubmit}>
                <h1 calssName="hidden-message" style={{visibility : this.state.value}}>Hey Look At That, A Secret Message!!!!!</h1>
                
                
                <label>
                    <button value={this.state.value} onChange={this.handleChange}>Click Here To See The Secret Message</button>
                </label>
            </form>
        )
      }
    
}