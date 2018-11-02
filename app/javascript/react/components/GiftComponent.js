import React from 'react'
import { Link } from 'react-router';
import PersonComponent from './PersonComponent'


const GiftComponent = (props) => {

  // <p>From: {props.user.email}</p>
  // <p>To: {props.person.name}</p>
    return (
    <div className="fifth">
      <p>Gift: {props.gift}</p>
      <p>Price: {props.price}</p>
      <p>Reason: {props.reason}</p>

    </div>
  )
}

export default GiftComponent;
