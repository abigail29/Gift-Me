import React from 'react'
import { Link } from 'react-router';

const PersonComponent = (props) => {
  return (
    <div className="columns small-6 first">
      <p><Link to={`/people/${props.id}`} className="link">Name: {props.name}</Link></p>
      <p>Birthday: {props.birthday}</p>
      <p>Description: {props.description}</p>
    </div>

  )
}

export default PersonComponent;



// name as a link to - pass down props.id
// react router thats dynamic '/person/:id' - top level compoennt - in react router part '/person/props.id'
//set it in rails routes too
