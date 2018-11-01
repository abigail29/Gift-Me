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
          // fetch('/api/v1/people')
          //     .then(response => {
          //       if (response.ok) {
          //         return response;
          //       } else {
          //         let errorMessage = `${response.status} (${response.statusText})`,
          //             error = new Error(errorMessage);
          //         throw(error);
          //       }
          //     })
          //     .then(response => response.json())
          //     .then(body => {
          //       this.setState({ people: body });
          //     })
          }
        )
      }

  render(){
    console.log(this.state.people)

let person = this.state.people.map(present => {
  return(
    <div>
      <PersonComponent
      key= {present.id}
      id= {present.id}
      name= {present.name}
      birthday= {present.birthday}
      description= {present.description}
      />
    </div>
  )
})

    return(
      <div>
      {person}
      </div>

    )
  }
}


export default PersonContainer;
// let people = this.state.people.map(person => {
//   <PersonComponent
//     id={person.id}
//     name={person.name}
//     birthday={person.birthday}
//     description={person.description}
//   />
// })
