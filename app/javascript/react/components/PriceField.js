import React from 'react'

const PriceField = props => {
  return(
    <label>
      Price:
      <input
        type="text"
        onChange={props.handlePriceChange}
        value={props.content}
         />
    </label>
  )

}

export default PriceField;
