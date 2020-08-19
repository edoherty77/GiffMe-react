import React from 'react'
import { Switch, Route } from 'react-router-dom'

import TrendingList from '../pages/TrendingList'

export default (
  <Switch>
    <Route exact path='/' component={ TrendingList }/>
  </Switch>
)
