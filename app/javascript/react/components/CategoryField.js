import React from 'react'

const CategoryField = props => {
  return(
    <label>
      Category:
      <div className="cat-category" id="cat-category">
         <label htmlFor="gift"></label>
         <select id="gift" name="gift" onChange={props.handleCategoryChange}>
         <option value="select">Select Category</option>
         <option value="clothing">Clothing</option>
         <option value="jewelry">Jewelry</option>
         <option value="furniture">Furniture</option>
         <option value="art">Art</option>
         <option value="vintage">Vintage</option>
         <option value="toys">Toys</option>
         <option value="music">Music</option>
         <option value="holidays">Holidays</option>
         </select>
       </div>
    </label>
  )

}

export default CategoryField;
