import types from './contact-types';
import { v4 as uuidv4 } from 'uuid';

const addContact = data => ({
  types: types.ADD,
  payload: {
    id: uuidv4(),
    ...data,
  },
});

export default { addContact };
