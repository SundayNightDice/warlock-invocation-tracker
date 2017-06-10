import React from 'react';

const Checkbox = ({ value, onChange, disabled, label }) => (
  <label className={disabled ? 'disabled' : ''}>
    <input
      type="checkbox"
      value={value}
      disabled={disabled}
      onChange={ e => {onChange(e.target.checked)} } />
      {label}
  </label>
);

export default Checkbox;
