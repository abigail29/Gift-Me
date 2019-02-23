
import React, { Component } from 'react';
import PersonComponent from '../components/PersonComponent';
import { browserHistory } from 'react-router';
import GiftComponent from '../components/GiftComponent';
import GiftField from '../components/GiftField';
import PriceField from '../components/PriceField';
import ReasonField from '../components/ReasonField';
import CategoryField from '../components/CategoryField';


class GiftFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gift: '',
      price: '',
      reason: '',
      categories: [],
      category: '',
      person_id: null,
      gifts: [],
      current_user: {}
    }

    this.handleEraseForm = this.handleEraseForm.bind(this)
    this.handlePriceChange = this.handlePriceChange.bind(this)
    this.handleReasonChange = this.handleReasonChange.bind(this)
    this.handleSubmitForm = this.handleSubmitForm.bind(this)
    this.addGiftSubmission = this.addGiftSubmission.bind(this)
    this.handleGiftChange = this.handleGiftChange.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleCategoryChange = this.handleCategoryChange.bind(this)

  }

  componentDidMount() {
    fetch(`/api/v1/gifts/${this.props.params.id}`)
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
        this.setState({
          gifts: body
        })
        fetch('/api/v1/current_user')
        .then(response => {
          if (response.ok) {
            return response;
          } else {
            let errorMessage = `${response.status} (${response.statusText})`,
                error = new Error(errorMessage);
            throw(error);
          }
        })
        .then(response => response.json())
        .then(body => {
          this.setState({ current_user: body});
          }
        )
      fetch(`/api/v1/categories`)
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
              error = new Error(errorMessage);
          throw(error);
        }
      })

      .then(response => response.json())
      .then(body => {
        this.setState({ categories: body });
        }
      )
      })
    .catch(error => console.error('Error:', error));
  }

  handleEraseForm(){
    this.setState({
      gift: '',
      price: '',
      reason: ''
        })
  }

  handleGiftChange(event){
    this.setState({ gift: event.target.value })
  }
  handlePriceChange(event){
    this.setState({ price: event.target.value })
  }
  handleReasonChange(event){
    this.setState({ reason: event.target.value })
  }
  handleCategoryChange(event){
    this.setState({ category: event.target.value })
  }

  addGiftSubmission(payload) {
      fetch(`/api/v1/gifts`, {
        credentials: 'same-origin',
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(body => {
        this.setState({
          gifts: this.state.gifts.concat(body)
        })
      })
      .catch(error => console.error('Error:', error));
    }

  handleDelete(giftId) {
    event.preventDefault()
      fetch(`/api/v1/gifts/${giftId}`, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
      })
        .then(response => {
          if (response.ok) {
            return response;
          } else {
            let errorMessage = `${response.status} (${response.statusText})`,
                error = new Error(errorMessage);
            throw(error);
          }
        })
        .then(response => response.json())
        .then(data => {
          let newGifts = this.state.gifts.filter(gift => {
            return gift.id !== giftId
          })
          this.setState({ gifts: newGifts})
        })
        .catch(error => console.error(`Error in fetch: ${error.message}`));
    }

    handleSubmitForm(event){
      event.preventDefault()
      let payload = {
        gift: this.state.gift,
        price: this.state.price,
        reason: this.state.reason,
        category: this.state.category,
        person_id: this.props.params.id
      }
      this.addGiftSubmission(payload)
      this.handleEraseForm()
    }

  render() {
    console.log(this.state)
    let groups;
    if (this.state.categories != undefined){
    groups = this.state.categories.map(category => {
      return (
        <CategoryField
          name = {category}
        />
      )
    })
  }

    let wrap = this.state.gifts.map(gift => {
    let deleteHandler = () => {
      this.handleDelete(gift.id)
    }
      return(
        <GiftComponent
          key={gift.id}
          id={gift.id}
          reason={gift.reason}
          price={gift.price}
          gift={gift.gift}
          category={gift.category}
          deleteHandler={deleteHandler}
          current_user={this.state.current_user}
        />
    )
  })

//shows all gifts
    return(
      <div>
        <div className = "wrappers">
          {wrap}
        </div>
        <form onSubmit={this.handleSubmitForm}>
          <h3 className="wrapped">Add a Gift</h3>
          <GiftField
            handleGiftChange={this.handleGiftChange}
            content={this.state.gift}
          />
          <PriceField
            prices={this.state.prices}
            handlePriceChange={this.handlePriceChange}
            content={this.state.price}
          />
          <ReasonField
            reasons={this.state.reasons}
            handleReasonChange={this.handleReasonChange}
            content={this.state.reason}
          />
          <label>
            Category:
            <div className="cat-category" id="cat-category">
               <label htmlFor="gift"></label>
               <select id="cat-category" name="category" onChange={this.handleCategoryChange}>
               {groups}
               </select>
             </div>
          </label>
          <input type="submit" className="button" value="Submit "/>
        </form>
      </div>
    )
  }
}

export default GiftFormContainer;
