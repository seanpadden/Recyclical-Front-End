import React, { Component, Fragment } from 'react';
// import './App.css';
import './index.css'
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import MapContainer from './containers/MapContainer.js'
import RecycleContainer from './containers/RecycleContainer.js'
import AddressForm from './components/AddressForm.js'
import Geocode from "react-geocode";


export default class App extends Component {

  state = {
    bins: [],
    currentLocation: {
      lat: 40.703316, 
      lng: -73.988145
    }
  }

  // componentDidMount() {
  //   fetch(`https://data.cityofnewyork.us/resource/sxx4-xhzg.json`)
  //   .then(resp => resp.json())
  //   .then(data => this.setState({
  //     bins: data
  //   }))
  // }

  /////// OUR STATE IS BEING SET 
  getCoordinates = (address) => {
    console.log(address)
    Geocode.setApiKey("AIzaSyDGeMybV3J8LGM97gbIO-Sn1elxpL5F_9A");
    Geocode.fromAddress(`${address}`).then(
      response => {
        const { lat, lng } = response.results[0].geometry.location;
        this.setState({
          currentLocation: {
            lat: lat,
            lng: lng
          }
        })
      },
      error => {
        console.error(error);
      }
    );
  }


  render() {
    console.log(this.state.currentLocation)
    return (
      <Fragment>
        <AddressForm getCoordinates={this.getCoordinates}/>
        <MapContainer 
          bins={this.state.bins}
          getCoordinates={this.getCoordinates} 
          currentLocation={this.state.currentLocation}
        />
        <br />
        <RecycleContainer bins={this.state.bins} />
      </Fragment>
    );
  }
}



