import React, { Component } from 'react';
import UserComponent from '../components/UserComponent';
import { Route, IndexRoute, Router, browserHistory, Link } from 'react-router';
import FormContainer from './FormContainer'
import Calendar from 'react-calendar';


class UserContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      email: "",
      username: "",
      firstName: "",
      lastName: ""
    }
  }

  componentDidMount(){
    fetch('/api/v1/current_user')
        .then(response => {
          if (response.ok) {
            return response;
          } else {
            let errorMessage = `${response.status} (${response.statusText})`,
                error = new Error(errorMessage);
            throw(error);
          }
        })
        .then(response => response.json())
        .then(body => {
          this.setState({ id: body.id, email: body.email, username: body.username, firstName: body.firstName, lastName: body.lastName });
        }
      )
    }

  render(){
    return(
      <div>
        <UserComponent
          id={this.state.id}
          email={this.state.email}
          username={this.state.username}
          firstName={this.state.firstName}
          lastName={this.state.lastName}
        />
      </div>

    )
  }
}

// <FormContainer
//   id={this.state.id}
// />

export default UserContainer;
