import React from 'react';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contact-actions';
import style from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <label>
    Find contacts by name
    <input
      className={style.inputFilter}
      type="text"
      value={value}
      onChange={onChange}
    ></input>
  </label>
);

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: event =>
    dispatch(contactsActions.filterContact(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
