import React from 'react'
import { Switch, Route } from 'react-router-dom'
//import Invoice from './components/invoice/Invoice';
import DashboardLanding from './components/pages/DashboardLanding';
import Profile from './components/pages/Profile'
// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>

    <Switch>
      <Route path='/' exact component={DashboardLanding}/>
      <Route path='/profile' exact component={Profile}/>
      {/* <Route path='/create-invoice' component={Invoice}/>
      <Route path='/invoice/:id' component={Invoice}/> */}
    </Switch>

  </main>
)

export default Main
