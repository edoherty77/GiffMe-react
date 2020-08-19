import React, { Component } from 'react'

import GifModel from '../models/gif'

 class MyGifs extends Component {

  componentDidMount(){
    this.fetchData()
  }

  fetchData = () => {
    GifModel.all()
      .then(data => 
        console.log(data)
      )
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default MyGifs
