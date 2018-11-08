import React from 'react'

const GiftField = props => {

  // let gifts = props.gifts.map( gift => {
  //   return (
  //     <option onChange={props.handleGiftChange} key={gift.id} value={gift.gift}>{gift.gift}</option>
  //   )
  // })

  return(
    <div className="gifts">
      <label>
      Gift:
      <input
        type="text"
        onChange={props.handleGiftChange}
        value={props.content}
      />
      </label>
    </div>
  )

}

export default GiftField;
