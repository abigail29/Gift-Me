import React from 'react'
import { Link } from 'react-router';
import Calendar from 'react-calendar';
import CalendarContainer from '../containers/CalendarContainer';

const UserComponent = (props) => {
  return (
      <div>
        <p>{props.calendar}</p>
        <p>{props.name}</p>
        <p>{props.birthday}</p>
        <p>{props.interest}</p>
        <Link to={`/users/${props.id}/peoples/new`}>Add a New Loved One!</Link>
      </div>
  )
}

export default UserComponent;
