import React from 'react'
//THIS IS FOR REASON - BUT MADE IT A CALENDAR

const ReasonField = props => {
  return(
    <label>
      Reason/Date:
      <input
        type="date"
        onChange={props.handleReasonChange}
        value={props.content}
         />
    </label>
  )

}

export default ReasonField;
