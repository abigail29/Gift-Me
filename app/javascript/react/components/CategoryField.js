import React from 'react'

const CategoryField = props => {
  return(

         <option key={props.name} value={props.name}>{props.name}</option>

  )
}

export default CategoryField;


// [
//   {
//     name: "accessories",
//     long_name: "Accessories"
//   },
//   {
//     name: "art",
//     long_name: "Art"
//   }
// ]
