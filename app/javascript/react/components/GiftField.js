import React from 'react'

const GiftField = props => {

  // let gifts = props.gifts.map( gift => {
  //   return (
  //     <option onChange={props.handleGiftChange} key={gift.id} value={gift.gift}>{gift.gift}</option>
  //   )
  // })

  return(
    <div>
      <label> Gift: </label>
      <input
        type="text"
        onChange={props.handleGiftChange}
        value={props.content}
      />
    </div>
  )

}

export default GiftField;
