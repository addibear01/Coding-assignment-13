import React from 'react';

type InputProps = {
  size: 'small';
  disabled?: boolean;
  placeholder?: string;
  [x: string]: any;
};

const Input: React.FC<InputProps> = ({ size, disabled = false, ...props }) => {
  const className = `input ${size} ${disabled ? 'disabled' : ''}`;
  return <input className={className} disabled={disabled} {...props} />;
};

export default Input;
