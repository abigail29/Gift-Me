import React from 'react'

const PriceField = props => {
  return(
    <label>
      Price (Please Only Put Numbers In Here!):
      <input
        type="text"
        onChange={props.handlePriceChange}
        value={props.content}
         />
    </label>
  )

}

export default PriceField;
