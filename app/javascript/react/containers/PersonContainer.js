import React, { Component } from 'react';
import PersonComponent from '../components/PersonComponent';
import { Route, IndexRoute, Router, browserHistory, Link } from 'react-router';
import FormContainer from './FormContainer'

class PersonContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current_user: {},
      people: []
    }
    this.hanldeDeletePerson = this.hanldeDeletePerson.bind(this)
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
      this.setState({ current_user: body, people: body.people });
    })
  }

  hanldeDeletePerson(personId) {
    event.preventDefault()
    fetch(`/api/v1/people/${personId}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin'
    })
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
      .then(data => {
        let newPeople = this.state.people.filter(person => {
          return person.id !== personId
        })
        this.setState({ people: newPeople})
      })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render(){

    let person = this.state.people.map(present => {

    let deletePersonHandler = () => {
      this.hanldeDeletePerson(present.id)
    }
    return(
      <PersonComponent
      key= {present.id}
      id= {present.id}
      name= {present.name}
      birthday= {present.birthday}
      description= {present.description}
      deletePersonHandler={deletePersonHandler}
      />
    )
  })

    return(
      <div className = "rows">
      {person}
      <div className="second">
        <Link to={`/users/this.props.params/people/new`} className="link">Add a New Loved One</Link>
      </div>
      </div>

    )
  }
}


export default PersonContainer;
