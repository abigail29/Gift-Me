import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import PersonContainer from '../containers/PersonContainer'
import FormContainer from '../containers/FormContainer'
import GiftFormContainer from '../containers/GiftFormContainer'

export const App = props => {
 return(
      <Router history={browserHistory}>
        <div>
          <Route path='/users/:id' component={PersonContainer} />
          <Route path='/users/:id/people/new' component={FormContainer} />
          <Route path='/people/:id' component={GiftFormContainer} />
        </div>
      </Router>
  )
}

export default App;
