import React from 'react';
import routes from './config/routes'
import { Link } from 'react-router-dom'


function App() {
  return (
    <div className='containter'>
    <nav>
      <Link to='/'>See Trending gifs</Link>{'  |  '}
      <Link to='/mygifs'>See your gifs</Link>
    </nav>
     { routes }
    </div>
  );
}

export default App;
