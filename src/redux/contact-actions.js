import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

// const addContact = data => ({
//   type: types.ADD,
//   payload: {
//     id: uuidv4(),
//     ...data,
//   },
// });

const addContact = createAction('contact/add', data => ({
  payload: {
    id: uuidv4(),
    ...data,
  },
}));

// const deleteContact = contactId => ({
//   type: types.DELETE,
//   payload: contactId,
// });

const deleteContact = createAction('contact/delete');

// const filterContact = value => ({
//   type: types.CHANGE_FILTER,
//   payload: value,
// });

const filterContact = createAction('contact/changeFilter');

export default { addContact, deleteContact, filterContact };
