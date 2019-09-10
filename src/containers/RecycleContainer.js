import React, { Component, Fragment } from 'react';
import RecycleBin from '../components/RecycleBin.js'

export default class RecycleContainer extends Component {

  render (){

    const bins = this.props.bins.map((bin => 
      <RecycleBin
        bin={bin}
      />
    ))
    return(
      <div>
        {bins}
      </div>
    )
  }
}
