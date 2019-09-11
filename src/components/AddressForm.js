import React, { Component} from 'react'
import Geocode from "react-geocode";
import '../App.css'
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
      <div style={{textAlign: 'center', justifyContent: 'center'}}>
        <form style={{textAlign: 'center'}} >
          <p 
            style={{fontFamily: 'courier', color: 'white', textAlign: 'center',}} >
            Got plastic? Enter your current location and let your G**gle™️ Overlord point you to the nearest recycling receptical. Or suffer the consequences... </p>
           <div className="question" style={{textAlign: 'center'}}>
            <input 
              type="text" 
              required className="form" 
              style={{textAlign: 'center'}} 
              name="address"
              value={this.state.address}
              onChange={this.handleChange}/>
            <label style={{textAlign: 'center'}}>Street, City, NY</label>
          </div>
        </form>
      <div>
        <br />
        <input className="btn" type="submit" name="submit" onClick={this.handleSubmit}/>
      </div>
    </div>
    )
  }
}