import React from 'react'
import { Link } from 'react-router';
import PersonComponent from './PersonComponent'


const GiftComponent = (props) => {

    return (
    <div className="fifth">
      <p>Gift: {props.gift.gift}</p>
      <p>Price: {props.gift.price}</p>
      <p>Reason: {props.gift.reason}</p>

      <p>From: {props.user.email}</p>
      <p>To: {props.person.name}</p>
    </div>
  )
}

export default GiftComponent;
