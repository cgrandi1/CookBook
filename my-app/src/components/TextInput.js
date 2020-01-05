import React from 'react'

const TextInput = ({name, onChange, placeholder, value, label}) => {
    return (
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <div className="field">
          <input
            type="text"
            name={name}
            className="form-control"
            placeholder={placeholder}
            value={value}
            onChange={onChange}/>
        </div>
      </div>
    );
  };

  export default TextInput;