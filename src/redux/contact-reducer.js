import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import action from './contact-actions';

// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case types.ADD:
//       return [...state, payload];

//     case types.DELETE:
//       return state.filter(contact => contact.id !== payload);

//     default:
//       return state;
//   }
// };

const items = createReducer([], {
  [action.addContact]: (state, { payload }) => [...state, payload],
  [action.deleteContact]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case types.CHANGE_FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };

const filter = createReducer('', {
  [action.filterContact]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
