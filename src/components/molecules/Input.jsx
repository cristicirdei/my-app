import React from "react";

const Input = ({ type, name, placeholder, onChange }) => {
  return (
    <div className="input-group">
      <label htmlFor={name}>{name}</label>
      <input
        type={type}
        id={name}
        placeholder={placeholder}
        onChange={onChange}
        autoComplete="none"
      ></input>
    </div>
  );
};
export default Input;
