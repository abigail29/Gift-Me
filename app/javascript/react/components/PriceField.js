import React from 'react'

const PriceField = props => {
  return(
    <label>
      Price (please only put an amount):
      <input
        type="text"
        onChange={props.handlePriceChange}
        value={props.content}
         />
    </label>
  )

}

export default PriceField;
