import React from 'react'
import './trending.css'

function TrendingGif(props) {
  return (
    <div>
      <img src={ props.images.fixed_height_small.url }>

      </img>
      <h5>{ props.title }</h5>
    </div>
  )
}

export default TrendingGif