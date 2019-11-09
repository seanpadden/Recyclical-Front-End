import React, { Component, Fragment } from 'react';
import './index.css'
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import MapContainer from './containers/MapContainer.js'
import RecycleContainer from './containers/RecycleContainer.js'
import NavBarContainer from './containers/NavBarContainer'
import AddressForm from './components/AddressForm.js'
import Geocode from "react-geocode";
import LoginForm from './components/LoginForm'
import { Switch, Route, withRouter } from 'react-router-dom'
import About from './components/About'

export default class App extends Component {
  state = {
    bins: [],
    users: {
      username: ""
    },
    currentLocation: {
      lat: 40.703316, 
      lng: -73.988145
    },
    currentUser: {
      username: "",
      password: ""
    },
    loggedIn: false
  }

  componentDidMount() {
    fetch(`https://data.cityofnewyork.us/resource/sxx4-xhzg.json`)
    .then(resp => resp.json())
    .then(data => this.setState({
      bins: data
    }))
  }

  getCoordinates = (address) => {
    address.toLowerCase()
    Geocode.setApiKey(`KEY`);
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

  createUser = (user) => {
    fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify({
        "username": user.username,
        "password_digest": user.password
      })
    })
    .then(resp => resp.json())
    .then(this.setState({
      loggedIn: true,
      currentUser: user
    }))
  }

  logOut = (e) => {
    this.setState({
      loggedIn: false,
      currentUser: ""
    })
  }

  render() {
    return (
      <Switch>
          <Route 
            exact path='/login' 
            render={(routerProps) => <LoginForm handleSubmit={this.createUser} {...routerProps} />} />
          <Route 
          exact path={'/home'} 
          render={(routerProps) => 
            <div>
                <NavBarContainer 
                  loggedIn={this.state.loggedIn} 
                  currentUser={this.state.currentUser}
                  handleClick={this.logOut}
                />
                <AddressForm getCoordinates={this.getCoordinates}/>
                <MapContainer 
                  bins={this.state.bins}
                  getCoordinates={this.getCoordinates} 
                  currentLocation={this.state.currentLocation}
              />
              <br />
                <RecycleContainer 
                  bins={this.state.bins} 
                  currentLocation={this.state.currentLocation}
              />
              </div>
            }
          />
        </Switch>
    );
  }
}