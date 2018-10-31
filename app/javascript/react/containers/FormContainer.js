import React, { Component } from 'react';
import UserComponent from '../components/UserComponent';
import BirthdayField from '../components/BirthdayField';
import NameField from '../components/NameField';
import InterestField from '../components/InterestField';

import Calendar from 'react-calendar';

class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      birthday: 0,
      interest: ''
    }
    this.handleClearForm = this.handleClearForm.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleBirthdayChange = this.handleBirthdayChange.bind(this)
    this.handleInterestChange = this.handleInterestChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

    handleClearForm(){
      this.setState({
        name: '',
        birthday: '00/00/0000',
        interest: ''
      })
    }

    handleNameChange(event){
      this.setState({ name: event.target.value })
    }
    handleBirthdayChange(event){
      this.setState({ birthday: event.target.value })
    }
    handleInterestChange(event){
      this.setState({ interest: event.target.value })
    }

    handleSubmit(event){
    event.preventDefault();
      let formPayload = {
        name: this.state.name,
        birthday: this.state.birthday,
        interest: this.state.interest
      }
      this.handleClearForm()
    }

    render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <h3>Add New Person</h3>
          <NameField
            handleNameChange={this.handleNameChange}
            content={this.state.name}
          />
          <BirthdayField
            handleBirthdayChange={this.handleBirthdayChange}
            content={this.state.birthday}
          />
          <InterestField
            handleInterestChange={this.handleInterestChange}
            content={this.state.interest}
          />
          <button>
            Submit
          </button>
        </form>
      </div>
    )
  }

}

export default FormContainer;
