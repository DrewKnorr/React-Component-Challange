import React, { Component} from "react";
import { PhotoshopPicker } from 'react-color';




export default class ColorChange extends Component{
    constructor(props) {
        super(props);
        this.state = {
          value: 'white',
          color: 'none',
          picker_vis: 'hidden',
          btn_vis: 'visible'
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangePicker = this.handleChangePicker.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {

        if(this.state.picker_vis==='hidden'){
            this.setState({picker_vis : 'visible'});
            this.setState({btn_vis:'hidden'});
        }
        else{
            this.setState({picker_vis:'hidden'});
            this.setState({btn_vis:'visible'});
        }
        console.log(this.state.picker_vis)
        console.log(this.state.btn_vis)
        event.preventDefault();
      }
      handlePickerVis(event){
        this.setState({value: event.target.picker_vis});
      }
      handleChangePicker(event){
        this.setState({ value: event.hex });
      }
    
      render() {
        return (
            <form className="font-wrapper" onSubmit={this.handleSubmit}>
                <div className="display-wrapper">
                  <div style={{backgroundColor : this.state.value}} className="accent-color"></div>
                  <h1 style={{color : this.state.value}}>Hey Check Out That Color!</h1>
                  <div style={{backgroundColor : this.state.value}} className="accent-color"></div>
                </div>
                <div className="color-input">
                  <h5>( Color Name , Hex , or RGBA values work )</h5>
                  <label>
                      Enter Color: 
                      <input  value={this.state.value} onChange={this.handleChange}/>
                  </label>
                  <div className="picker-wrapper" style={{visibility: this.state.picker_vis}}>
                    <PhotoshopPicker  className="color-scroll" color={this.state.value} onChangeComplete={ this.handleChangePicker} />
                  </div>
                  <button style={{visibility:this.state.btn_vis}} value={this.state.value} onChange={this.handlePickerVis}>Click here for a Secret</button>
                  <button className="close-picker-btn" style={{visibility:this.state.picker_vis}} value={this.state.value} onChange={this.handlePickerVis}>Put Picker Away</button>
                </div>
            </form>
        )
      }
    
}