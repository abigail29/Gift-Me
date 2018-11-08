import React, { Component } from 'react';
import PersonComponent from '../components/PersonComponent';
import BirthdayField from '../components/BirthdayField';
import NameField from '../components/NameField';
import DescriptionField from '../components/DescriptionField';
import { browserHistory } from 'react-router';

class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      birthday: '',
      description: '',
      people: [],
      person: ''
    }
    this.handleClearForm = this.handleClearForm.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleBirthdayChange = this.handleBirthdayChange.bind(this)
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.addSubmission = this.addSubmission.bind(this)
  }

    handleClearForm(){
      this.setState({
        name: '',
        birthday: '',
        description: ''
      })
    }

    handleNameChange(event){
      this.setState({ name: event.target.value })
    }
    handleBirthdayChange(event){
      this.setState({ birthday: event.target.value })
    }
    handleDescriptionChange(event){
      this.setState({ description: event.target.value })
    }

    addSubmission(formPayload) {
        fetch('/api/v1/people', {
          credentials: 'same-origin',
          method: 'POST',
          body: JSON.stringify(formPayload),
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
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
        .then(body => {
          browserHistory.push('/users/:id')
          })
        .catch(error => console.error('Error:', error));
      }


    handleSubmit(event){
      event.preventDefault();
      let formPayload = {
        name: this.state.name,
        birthday: this.state.birthday,
        description: this.state.description
      }
      this.addSubmission(formPayload)
      this.handleClearForm()
    }

    render() {

  //     let wrap = this.state.people.map(person => {
  //     let deletePersonHandler = () => {
  //       this.hanldeDeletePerson(person.id)
  //     }
  //   return(
  //     <PersonComponent
  //     deletePersonHandler={deletePersonHandler}
  //     />
  //
  //   )
  //
  // })

    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <h3 className="person">Add a New Person</h3>
          <NameField
            handleNameChange={this.handleNameChange}
            content={this.state.name}
          />
          <BirthdayField
            handleBirthdayChange={this.handleBirthdayChange}
            content={this.state.birthday}
          />
          <DescriptionField
            handleDescriptionChange={this.handleDescriptionChange}
            content={this.state.description}
          />
          <input type="submit" className="button" value="Submit "/>
        </form>
      </div>
    )
  }

}

export default FormContainer;
