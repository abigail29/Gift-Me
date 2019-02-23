import React from 'react'

// you dont need state - state is in layer above - which is my form - this in input for form 
const CategoryField = props => {
  return(

         <option key={props.name} value={props.name}>{props.name}</option>

  )
}

export default CategoryField;
