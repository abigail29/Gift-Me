import React from 'react'

const InterestField = props => {
  return(
    <label>
      Interests:
      <input
        type="text"
        onChange={props.handleInterestChange}
        value={props.content}
        />
    </label>
  )

}

export default InterestField;
