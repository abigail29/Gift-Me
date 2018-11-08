import React, { Component } from 'react'
import { Link } from 'react-router';
import PersonComponent from './PersonComponent'


class GiftComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      category: []
    }
  }

  // componentDidMount(){
  //   fetch(`/api/v1/categories`)
  //   //https://openapi.etsy.com/v2/taxonomy/categories/?api_key=9xlgrevoja6r6rejly5g4nz0
  //   .then(response => {
  //     if (response.ok) {
  //       return response;
  //     } else {
  //       let errorMessage = `${response.status} (${response.statusText})`,
  //           error = new Error(errorMessage);
  //       throw(error);
  //     }
  //   })
  //   .then(response => response.json())
  //   .then(body => {
  //     this.setState({ category: body });
  //     }
  //   )
  //   .catch(error => console.error('Error:', error));
  // }

  render(){
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
