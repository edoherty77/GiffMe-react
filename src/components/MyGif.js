import React from 'react'

function MyGif(props) {
  return (
    <div>
      <img
        src={props.url}
        alt='oops'
      />
    </div>
  )
}

export default MyGif