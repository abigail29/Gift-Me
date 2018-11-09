import React, { Component } from 'react'
import { Link } from 'react-router';
import PersonComponent from './PersonComponent'
import GiftFormContainer from '../containers/GiftFormContainer'


class GiftComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      category: []
    }
  }

  render(){

  // let totalPrice = 0;
  // this.props.gifts.forEach(g => {
  //   totalPrice += g.price;
  // })


  let editButton
    editButton = <a className="edit" href={`/gifts/${this.props.id}/edit`}>Edit</a>
    // editButton= <button onClick={this.props.handleEdit}>Edit</button>
    //function to browserHistory.push

  let deleteButton
    deleteButton = <button onClick={this.props.deleteHandler}>Delete</button>

    return (
    <div className="fifth">
      <p className = "etsylink">Gift: <a href= {`https://www.etsy.com/market/${this.props.category}`} target="_blank">{this.props.gift}</a></p>
      <p>Price: {this.props.price}</p>
      <p>Reason: {this.props.reason}</p>
      <p>Category: {this.props.category}</p>
      {deleteButton}
      {editButton}
    </div>

    )
  }

}

export default GiftComponent;
