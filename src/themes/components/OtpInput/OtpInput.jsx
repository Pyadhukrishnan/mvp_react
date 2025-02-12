/**
 * @file OtpInput.jsx
 * @description A reusable OTP (One-Time Password) input component that allows users to enter numeric OTPs.
 *
 * @component
 * @param {Object} props - Component properties.
 * @param {number} [props.length=6] - The number of OTP input fields.
 * @param {Function} props.onComplete - Callback function triggered when all OTP fields are filled.
 * @returns {JSX.Element} The OTP input component.
 */

import { useState, useRef } from "react";
import styles from "./OtpInput.module.css";

/**
 * OtpInput Component
 *
 * @description A controlled OTP input field component that allows users to input 
 * a one-time password (OTP) by filling separate fields. It automatically moves the 
 * cursor to the next field and triggers `onComplete` when all fields are filled.
 *
 * @param {Object} props - Component properties.
 * @param {number} [props.length=6] - The number of OTP input fields.
 * @param {Function} props.onComplete - Callback function triggered when all OTP fields are filled.
 * @returns {JSX.Element} The OTP input component.
 */
const OtpInput = ({ length = 6, onComplete }) => {
  // State to store OTP values in an array
  const [otp, setOtp] = useState(new Array(length).fill(""));
  
  // Reference for input elements to handle auto focus
  const inputRefs = useRef([]);

  /**
   * Handles input change event for OTP fields.
   * 
   * @param {number} index - Index of the OTP input field.
   * @param {Event} event - Input change event.
   */
  const handleChange = (index, event) => {
    const value = event.target.value;

    if (isNaN(value)) return; // Ensure only numbers are entered

    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1); // Store only last digit
    setOtp(newOtp);

    // Move to next input if available
    if (value && index < length - 1) {
      inputRefs.current[index + 1].focus();
    }

    // Call onComplete when all fields are filled
    if (newOtp.every((digit) => digit !== "")) {
      onComplete(newOtp.join(""));
    }
  };

  /**
   * Handles backspace key event for OTP fields.
   * 
   * @param {number} index - Index of the OTP input field.
   * @param {KeyboardEvent} event - Key event.
   */
  const handleKeyDown = (index, event) => {
    if (event.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div className={styles.otpContainer}>
      {otp.map((digit, index) => (
        <input
          key={index}
          type="text"
          maxLength="1"
          value={digit}
          ref={(el) => (inputRefs.current[index] = el)}
          onChange={(e) => handleChange(index, e)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          className={styles.otpInput}
        />
      ))}
    </div>
  );
};

export default OtpInput;
