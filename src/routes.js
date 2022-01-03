import React from 'react'
import { Route, Switch } from 'react-router-dom'

//Pages
import Home from './Pages/Home'
import Reservas from './Pages/Reservas'

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/reservas" component={Reservas} />
    </Switch>
  )
}

export default Routes
