import React from 'react'
import './trending.css'

function TrendingGif(props) {
  
  return (
    
      <div className='TrendingGif'>
        <input
          name='url'
          value={ props.gif.images.fixed_height_small.url }
          type='checkbox'
          onChange={props.handleChange}
        />
        <label htmlFor='url'>
          <img 
            src={ props.gif.images.fixed_height_small.url }
            alt={`${props.gif.title}`} 
          />
        </label>
      </div>
  )
}

export default TrendingGif