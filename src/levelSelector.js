import React from 'react';

const LevelSelector = ({ value, onChange, label, className }) => (
  <label className={className}>
    {`${label}: `}
    <input
      type="number"
      min="1"
      max="20"
      value={value}
      onChange={ e => {onChange(Number(e.target.value))} } />
  </label>
);

export default LevelSelector;
