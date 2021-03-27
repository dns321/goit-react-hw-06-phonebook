import React from 'react';

const Filter = ({ value, onChange }) => (
  <label>
    Find contacts by name
    <input
      //   className={style.inputFilter}
      type="text"
      value={value}
      onChange={onChange}
    ></input>
  </label>
);

export default Filter;
