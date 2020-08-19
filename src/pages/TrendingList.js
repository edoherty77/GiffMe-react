import React, { Component } from 'react'
import Axios from 'axios'
import { giffyUrl, key } from '../config/constants'
// import '../index.css'

import TrendingGif from '../components/TrendingGif'

class TrendingList extends Component {

  state = {
    trending: [],
    chosen: new Map(),
    // this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount(){
    Axios.get(`${giffyUrl}trending?&api_key=${key}&rating=r`)
      .then(res => {
        // console.log(res.data.data)
        this.setState({
          trending: res.data.data
        })
        console.log(this.state.trending)
      })
      .catch(err => console.log(err))
  }


  handleChange = (event) => {
    const url = event.target.value
    const isChecked = event.target.checked
    this.setState(prevState => ({ chosen: prevState.chosen.set(url, isChecked)}))
    
  }
  handleSubmit = (event) => {
    event.preventDefault()
     
  }

  render() {
    let gifList = this.state.trending.map((gif, index)=> {
      return <TrendingGif handleChange={this.handleChange} gif={gif} key={index}/>
    })
    return (
      <div>
        <h1>Welcome To GiffMe</h1>
        <form onSubmit={this.handleSubmit}>
          <div className='trendingList'>
            {gifList}
          </div>
          <input type='submit' value='Add gifs'/>
        </form>
        
        
      </div>
      
    )
  }
}

export default TrendingList
