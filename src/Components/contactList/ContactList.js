import React from 'react';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, deleteContact }) => (
  <ul>
    {/* {contacts.map(({ id, name, number }) => (
      <li key={id}
        className={style.itemContact}>
        {name}: {number}
        <button
          className={style.itemContactBtn}
          type="button"
          onClick={() => deleteContact(id)}
        >
          Delete
        </button>
      </li>
    ))} */}
  </ul>
);

export default ContactList;
