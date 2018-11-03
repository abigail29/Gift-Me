import React, { Component } from 'react';
import GiftComponent from '../components/GiftComponent';
import { Route, IndexRoute, Router, browserHistory, Link } from 'react-router';
import GiftFormContainer from './GiftFormContainer'

class GiftContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gift: '',
      price: '',
      reason: '',
      giftings: []

    }
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete(giftId) {
    event.preventDefault()
      fetch(`/api/v1/gifts/${giftId}`, {
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
          let oldGifts = this.props.gifts
          let newGifts = oldGifts.filter(gift => {
            return gift.id !== giftId
          })
          this.setState({ gifts: newGifts })
        })
        .catch(error => console.error(`Error in fetch: ${error.message}`));
    }

  render(){

    let wrap = this.props.gifts.map(gift => {
    let deleteHandler = () => {
      this.handleDelete(gift.id)
    }

      return(
        <GiftComponent
          key={gift.id}
          id={gift.id}
          reason={gift.reason}
          price={gift.price}
          gift={gift.gift}
          deleteHandler={deleteHandler}
        />
    )
  })

    return(
      <div className = "wrappers">
        {wrap}
      </div>

    )
  }
}


  export default GiftContainer;
