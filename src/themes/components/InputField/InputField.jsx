/**
 * @file InputField.jsx
 * @description A reusable input field component that supports themes, password visibility toggle, 
 * and dynamic value handling.
 * 
 * @component
 * @param {Object} props - Component props.
 * @param {string} [props.theme="default"] - The theme style of the input field (options: "default", "error").
 * @param {string} [props.type="text"] - The type of the input field (e.g., "text", "password").
 * @param {function} props.onChange - The function to execute when the input value changes.
 * @param {string} props.value - The current value of the input field.
 * @returns {JSX.Element} The InputField component.
 */

import { useState } from 'react';
import styles from './InputField.module.css';

const InputField = ({ theme = "default", type = "text", onChange, value }) => {
  // State to track password visibility
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  
  // State to control input type (toggle between "password" and "text")
  const [inputType, setInputType] = useState(type);

  /**
   * @function togglePasswordVisibility
   * @description Toggles the visibility of the password field.
   */
  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
    setInputType((prev) => (prev === "text" ? "password" : "text"));
  };

  /**
   * @function setTheme
   * @description Returns the appropriate CSS class based on the theme.
   * @param {string} theme - The selected theme.
   * @returns {string} The corresponding CSS class.
   */
  const setTheme = (theme) => {
    switch (theme) {
      case "error":
        return styles.error;
      default:
        return styles.default;
    }
  };

  /**
   * @function textChange
   * @description Handles input value changes and triggers the onChange function.
   * @param {Event} e - The input change event.
   */
  const textChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className={`${styles.default} ${setTheme(theme)}`}>
      <input 
        className={styles.inputField} 
        type={inputType} 
        onChange={textChange} 
        value={value} 
      />
      
      {/* Show password toggle button only if input type is "password" */}
      {type === "password" && (
        <button 
          type="button" 
          className={styles.toggleButton} 
          onClick={togglePasswordVisibility}
        >
          {isPasswordVisible ? "非表示" : "表示"}
        </button>
      )}
    </div>
  );
};

export default InputField;
