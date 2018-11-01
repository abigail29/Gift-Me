import React from 'react'
import { Link } from 'react-router';

const PersonComponent = (props) => {
  return (
    <div>
    <div className="third">
      <div className="first">
        <p>Name: {props.name}</p>
        <p>Birthday: {props.birthday}</p>
        <p>Description: {props.description}</p>
      </div>
      <div className="second">
        <Link to={`/users/${props.id}/people/new`}>Add a New Loved One</Link>
      </div>
      </div>
    </div>

  )
}

export default PersonComponent;
