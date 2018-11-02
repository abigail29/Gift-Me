import React, { Component } from 'react';
import PersonComponent from '../components/PersonComponent';
import { browserHistory } from 'react-router';
import GiftComponent from '../components/GiftComponent';
import GiftField from '../components/GiftField';
import PriceField from '../components/PriceField';
import ReasonField from '../components/ReasonField';
import GiftContainer from './GiftContainer';


class GiftFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gift: '',
      price: '',
      reason: '',
      person_id: null,
      gifts: []
    }
    this.handleEraseForm = this.handleEraseForm.bind(this)
    this.handlePriceChange = this.handlePriceChange.bind(this)
    this.handleReasonChange = this.handleReasonChange.bind(this)
    this.handleSubmitForm = this.handleSubmitForm.bind(this)
    this.addGiftSubmission = this.addGiftSubmission.bind(this)
    this.handleGiftChange = this.handleGiftChange.bind(this)
  }

  componentDidMount() {
    fetch('/api/v1/gifts')
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
        this.setState({
          gifts: body
        })
      })
    .catch(error => console.error('Error:', error));
  }

  handleEraseForm(){
    this.setState({
      gift: '',
      price: '',
      reason: ''
    })
  }

  handleGiftChange(event){
    this.setState({ gift: event.target.value })
  }
  handlePriceChange(event){
    this.setState({ price: event.target.value })
  }
  handleReasonChange(event){
    this.setState({ reason: event.target.value })
  }

  addGiftSubmission(payload) {
      fetch(`/api/v1/giftings`, {
        credentials: 'same-origin',
        method: 'POST',
        body: JSON.stringify(payload),
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

        })
      .catch(error => console.error('Error:', error));
    }

    handleSubmitForm(event){
      this.setState({ gift: event.target[0].value,
                      price: event.target[1].value,
                      reason: event.target[2].value})
      let payload = {
        gift: this.state.gift,
        price: this.state.price,
        reason: this.state.reason,
        person_id: this.props.params.id
      }
      this.addGiftSubmission(payload)
      this.handleEraseForm()
    }

  render() {
    return(
      <div>
        <GiftContainer />

        <form onSubmit={this.handleSubmitForm}>
          <h3 className="wrapped">Add a Gift</h3>
          <GiftField
            gifts={this.state.gifts}
            handleGiftChange={this.handleGiftChange}
            content={this.state.gift}
          />
          <PriceField
            handlePriceChange={this.handlePriceChange}
            content={this.state.price}
          />
          <ReasonField
            handleReasonChange={this.handleReasonChange}
            content={this.state.reason}
          />
          <input type="submit" className="button" value="Submit "/>
        </form>
      </div>
    )
  }
}

export default GiftFormContainer;
