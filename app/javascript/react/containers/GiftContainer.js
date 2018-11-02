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
      // gifts: [],
      // users: [],
      // people: []
    }
  }
  // componentDidMount(){
    // fetch('/api/v1/gifts')
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
    //       this.setState({ gifts: body });
    //       }
    //     )

    // fetch('/api/v1/giftings')
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
    //       this.setState({ giftings: body });
    //       }
    //     )
    // fetch('/api/v1/users')
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
    //       this.setState({ users: body });
    //       }
    //     )
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
        //       }
        //     )
      // }

  render(){

    let wrap = this.props.gifts.map(gift => {

      return(
        <GiftComponent
          key={gift.id}
          id={gift.id}
          reason={gift.reason}
          price={gift.price}
          gift={gift.gift}
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
