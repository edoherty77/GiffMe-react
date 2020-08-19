import React, { Component } from 'react'

import GifModel from '../models/gif'
import MyGif from '../components/MyGif'

 class MyGifs extends Component {

  state = {
    gifs: []
  }

  componentDidMount(){
    this.fetchData()
  }

  fetchData = () => {
    GifModel.all()
      .then(data => {
        this.setState({ gifs: data.gifs})
      })
  }

  render() {
    const gifs = this.state.gifs.map((gif, index)=> {
      return <MyGif url={gif.url} key={index}/>
    })
    return (
      <div>
        <h1>Your Gifs</h1>
        <div className='myList'>
          {this.state.gifs.length ? gifs : 'loading...'}
        </div>
      </div>
      
    )
  }
}

export default MyGifs
