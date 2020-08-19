import React, { Component } from 'react'
import Axios from 'axios'
import TrendingGif from '../components/TrendingGif'
import { giffyUrl, key } from '../config/constants'

class TrendingList extends Component {

  state = {
    gifs: []
  }

  componentDidMount(){
    Axios.get(`${giffyUrl}trending?&api_key=${key}&rating=r`)
      .then(res => {
        // console.log(res.data.data)
        this.setState({
          gifs: res.data.data
        })
        console.log(this.state.gifs)
      })
      .catch(err => console.log(err))
  }
  render() {
    let gifList = this.state.gifs.map((gif, index)=> {
      return <TrendingGif {...gif} key={ index }/>
    })
    return (
      <div>
        {gifList}
      </div>
    )
  }
}

export default TrendingList
