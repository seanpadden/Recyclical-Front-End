import React, { Component, Fragment } from 'react';
import { NavLink, Link, withRouter } from 'react-router-dom'
import App from '../App.js'
import MapContainer from '../containers/MapContainer.js'



export default class NavBarContainer extends Component {
  render(){
    return(
      <div className="navbar">
        <NavLink className="nav-links" to="/login"> Login </NavLink>
        {/* <NavLink className="nav-links" to="/favorites"> Favorites </NavLink>
        <NavLink className="nav-links" to="/about"> About </NavLink> */}
      </div>
    )
  }
}
