import React from 'react'
import { Link } from 'react-router';
import PersonComponent from './PersonComponent'


const GiftComponent = (props) => {


  let editButton
    editButton = <a href={`/gifts/${props.id}/edit`}>Edit</a>

  let deleteButton
    deleteButton = <button onClick={props.deleteHandler}>Delete</button>


    return (
    <div className="fifth">
      <p>Gift: {props.gift}</p>
      <p>Price: {props.price}</p>
      <p>Reason: {props.reason}</p>
      {deleteButton}
      {editButton}

    </div>
  )
}

export default GiftComponent;
