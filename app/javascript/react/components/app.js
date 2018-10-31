import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import UserContainer from '../containers/UserContainer'
import FormContainer from '../containers/FormContainer'

export const App = props => {
 return(
      <Router history={browserHistory}>
        <div>
          <Route path='/users/:id' component={UserContainer} />
          <Route path='/users/:id/peoples/new' component={FormContainer} />
        </div>
      </Router>
  )
}


export default App;
