import React from 'react'

const BirthdayField = props => {
  return(
    <div>
    <label>
      Birthday:
      </label>
      <input
        type="date"
        onChange={props.handleBirthdayChange}
        value={props.content}
        />
        </div>

  )

}

export default BirthdayField;
