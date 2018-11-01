import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import PersonContainer from '../containers/PersonContainer'
import FormContainer from '../containers/FormContainer'

export const App = props => {
 return(
      <Router history={browserHistory}>
        <div>
          <Route path='/users/:id' component={PersonContainer} />
          <Route path='/users/:id/people/new' component={FormContainer} />
        </div>
      </Router>
  )
}

export default App;
