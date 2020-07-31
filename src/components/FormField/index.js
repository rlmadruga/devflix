import React from "react";

function FormField({ label, type, name, value, placeholder, onChange }) {
  return (
    <div>
      <label>
        {label}
        <input
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
      </label>
    </div>
  );
}

export default FormField;
