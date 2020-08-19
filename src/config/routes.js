import React from 'react'
import { Switch, Route } from 'react-router-dom'

import TrendingList from '../pages/TrendingList'
import MyGifs from '../pages/MyGifs'

export default (
  <Switch>
    <Route exact path='/' component={ TrendingList }/>
    <Route exact path='/mygifs' component={ MyGifs }/>
  </Switch>
)
