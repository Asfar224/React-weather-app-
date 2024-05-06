import React from 'react'
import {BrowserRouter as Router , Switch ,Route } from 'react-router-dom'
import Homepage from './Homepage';
import About from './About';


 function Routes() {
  return (
    <Router>
        <Switch>
            <Route path = "/">
              <Homepage />
             </Route>
            <Route path = "/Home">
              <Homepage />
            </Route>
            <Route path = "/About">
                <About/>
            </Route>
            <Route>
                <NotFoundPage />
           </Route>
        </Switch>
    </Router>
  )
}

export default Routes;
