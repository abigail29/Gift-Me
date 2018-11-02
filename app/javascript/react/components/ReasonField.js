import React from 'react'

const ReasonField = props => {
  return(
    <label>
      Reason:
      <input
        type="text"
        onChange={props.handleReasonChange}
        value={props.content}
         />
    </label>
  )

}

export default ReasonField;
