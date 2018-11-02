import React from 'react'

const GiftField = props => {

  let gifts = props.gifts.map( gift => {
    return (
      <option onChange={props.handleGiftChange} key={gift.id} value={gift.gift}>{gift.gift}</option>
    )
  })

  return(
    <label>
      Gift:

      <select onClick={props.handleGiftChange} onChange={props.handleGiftChange}>
        {gifts}
      </select>

    </label>
  )

}

export default GiftField;
