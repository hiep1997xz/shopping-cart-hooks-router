import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Products from '../products/Products'

const Router = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Products />
        </Route>
      </Switch>
    </div>
  )
}

export default Router
