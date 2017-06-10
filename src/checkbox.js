import React from 'react';

const Checkbox = ({ value, onChange, disabled, children }) => (
  <label className={disabled ? 'disabled' : ''}>
    <input
      type="checkbox"
      value={value}
      disabled={disabled}
      onChange={ e => {onChange(e.target.checked)} } />
    {children}
  </label>
);

export default Checkbox;
