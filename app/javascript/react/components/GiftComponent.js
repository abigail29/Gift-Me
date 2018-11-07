import React from 'react'
import { Link } from 'react-router';
import PersonComponent from './PersonComponent'


const GiftComponent = (props) => {


  let editButton
    editButton = <a className="edit" href={`/gifts/${props.id}/edit`}>Edit</a>
    // editButton= <button onClick={props.handleEdit}>Edit</button>
    //function to browserHistory.push

  let deleteButton
    deleteButton = <button onClick={props.deleteHandler}>Delete</button>


    return (
    <div className="fifth">
      <p>Gift: {props.gift}</p>
      <p>Price: {props.price}</p>
      <p>Reason: {props.reason}</p>
      <p>Category:{props.category}</p>
      {deleteButton}
      {editButton}
    </div>

  )
}

export default GiftComponent;
