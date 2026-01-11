import React, { useState, useEffect } from "react";
import "./style.css";

const SwitchCase = ({ options = [], value, defaultValue, onChange }) => {
  const isControlled = value !== undefined;

  const [internalValue, setInternalValue] = useState(
    defaultValue ?? options[0]?.value
  );

  const activeValue = isControlled ? value : internalValue;

  useEffect(() => {
    if (!isControlled && !options.some((opt) => opt.value === internalValue)) {
      setInternalValue(options[0]?.value);
    }
  }, [options, internalValue, isControlled]);

  const handleChange = (newValue) => {
    if (!isControlled) {
      setInternalValue(newValue);
    }
    onChange?.(newValue);
  };

  return (
    <div className="switch-container">
      <div className="switch">
        {options.map((option) => (
          <button
            key={option.value}
            className={`switch-item ${
              option.value === activeValue ? "active" : ""
            }`}
            onClick={() => handleChange(option.value)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SwitchCase;
