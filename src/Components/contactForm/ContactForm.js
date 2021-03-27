import React, { Component } from 'react';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contact-actions';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handlerChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name } = this.state;
    // if (!this.props.checkUniqueContact(name)) {
    //   alert(`'${name} isalready in contacts'`);
    //   return;
    // } else {
    this.props.onSubmit(this.state);
    this.reset();
    // }
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            //   className={}
            type="text"
            name="name"
            placeholder="Enter name"
            value={this.state.name}
            onChange={this.handlerChange}
          ></input>
        </label>

        <label>
          Number
          <input
            //   className={}
            type="tel"
            name="number"
            placeholder="Enter phone namber"
            value={this.state.number}
            onChange={this.handlerChange}
          ></input>
        </label>

        <button type="submit">Add contact</button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSubmit: data => dispatch(contactsActions.addContact(data)),
});

export default connect(null, mapDispatchToProps)(ContactForm);
