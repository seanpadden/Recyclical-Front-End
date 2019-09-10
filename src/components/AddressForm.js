import React, { Component} from 'react'
import Geocode from "react-geocode";

import '../index.css'

export default class AddresForm extends Component {
  state = {
    address: "",
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = () => {
    this.props.getCoordinates(this.state.address)
  }

  render(){
    return(
      <div className="form" style={{display: 'block'}}>
        <label> 
          Enter an NYC address
          <form>
            <input 
              type="text"
              placeholder="Street, City, State"
              name="address"
              value={this.state.address}
              onChange={this.handleChange}
            />
          </form>
          <br />
        </label>
        <input type="submit" name="submit" onClick={this.handleSubmit}/>
      </div>
    )
  }
}