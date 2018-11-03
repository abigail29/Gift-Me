import React from 'react'
import { Link } from 'react-router';
import PersonComponent from './PersonComponent'


const GiftComponent = (props) => {

  let deleteButton
  if (props.userId === props.giftUserId) {
    deleteButton = <button onClick={props.deleteHandler}>Delete</button>
  }

    return (
    <div className="fifth">
      <p>Gift: {props.gift}</p>
      <p>Price: {props.price}</p>
      <p>Reason: {props.reason}</p>
      {deleteButton}
    </div>
  )
}

export default GiftComponent;
