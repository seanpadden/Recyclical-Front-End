import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import '../index.css'
import recycle from '../recycle.png'

const mapStyles = {
  marginTop: '1%',
  marginLeft: '20%',
  width: '60%',
  height: '62%',
  border: 'solid 2px black',
};

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {}
  }

  markerClick = () => {
    this.setState({
      showingInfoWindow: true,
      
    })
  }

  render() {
    const binPositions = this.props.bins.map((bin => 
      <Marker 
        position={{ lat: bin.latitude, lng: bin.longitude}} 
        onClick={this.markerClick}
        icon={recycle}
      />
    ))
    return (
      <div>
        <Map 
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={this.props.currentLocation}
          center={this.props.currentLocation}
        >
          <Marker 
            position={this.props.currentLocation} 
            icon={{url: "http://maps.google.com/mapfiles/ms/icons/purple-dot.png"}}
          />  
          {binPositions}
        </Map>
        <br/>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: `KEY`
})(MapContainer);

