import React, { Component, Fragment } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import Geocode from "react-geocode";
import '../index.css'

const mapStyles = {
  position: 'absolute',
  marginTop: '1%',
  marginLeft: '20%',

  width: '70%',
  height: '62%',
  border: 'solid 2px black',
};

export class MapContainer extends Component {



  render() {
    console.log(this.props.currentLocation)
    const binPositions = this.props.bins.map((bin => 
      <Marker position={{ lat: bin.latitude, lng: bin.longitude}}  />
      ))
    return (
      <div >
        <Map 
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={this.props.currentLocation}
          center={this.props.currentLocation}

          >
          {binPositions}
        </Map>
        <br/>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDGeMybV3J8LGM97gbIO-Sn1elxpL5F_9A'
})(MapContainer);

