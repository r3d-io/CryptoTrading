import React from 'react';
import { Button, Form } from "semantic-ui-react";
import filterList from '../data/matchCurrency';
import { addCoinList } from '../actions';
import { connect } from 'react-redux';

class SearchCrypto extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '' };
  }

  handleInput = (event, error) => {
    if (error)
      alert("Undefined input")
    else
      this.setState({ name: event.target.value })
  };

  async handleForm(event) {
    event.preventDefault();
    let filteredList = await filterList(this.state.name)
    this.props.dispatch(addCoinList(filteredList, true))
    // console.log(this.props.coinList)
  }

  render() {
    return (
      <Form onSubmit={this.handleForm.bind(this)}>
        <Form.Field>
          <label>Currency</label>
          <input onChange={this.handleInput.bind(this)}
            placeholder='Currency'
          />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    )
  }
}

export default connect()(SearchCrypto);