/**
 * @file LoginForm.jsx
 * @description This component renders a login form with email/username and password fields.
 * It includes validation, error handling, and an API call to authenticate the user.
 * 
 * @component
 * @param {Function} setShowLogin - A function to toggle the visibility of the login form.
 * 
 * @dependencies
 * - React (useState, useEffect)
 * - LoginServices (UseLoginServices)
 * - InputField (Reusable input component)
 * - ButtonComponent (Reusable button component)
 * - CSS Module (LoginForm.module.css)
 */

import React, { useEffect, useState } from "react";
import styles from "./LoginForm.module.css";
import InputField from "../../../../themes/components/InputField/InputField";
import ButtonComponent from "../../../../themes/components/ButtonComponent/ButtonComponent";
import UseLoginServices from "../../services/LoginServices";

/**
 * @function LoginForm
 * @description Handles user login with input validation and API authentication.
 * @param {Object} props - Component properties.
 * @param {Function} props.setShowLogin - Function to toggle login form visibility.
 * @returns {JSX.Element} The login form component.
 */

const LoginForm = ({ setShowLogin }) => {
  // State variables for email, password, and error messages
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(undefined);
  const [passwordError, setPasswordError] = useState(undefined);
  const [mainError, setMainError] = useState(undefined);

  /**
   * @function handleSubmit
   * @description Handles form submission, validates input, and calls the login API.
   * @param {Event} event - The form submission event.
   * @returns {void}
   */
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent page reload

    // Call login service to authenticate user
    const response = await UseLoginServices().login(email, password);

    // Set error messages based on API response
    setEmailError(response.errors.emailError);
    setPasswordError(response.errors.passwordError);
    setMainError(response.errors.mainError);

    // If login is successful, show an alert (You may redirect instead)
    if (response.status) {
      alert(response.message);
    }
  };

  /**
   * @function handleToggleLoginShow
   * @description Closes the login form when the user clicks "Forgot Password".
   * @returns {void}
   */
  const handleToggleLoginShow = () => {
    setShowLogin(false);
  };

  /**
   * @effect Resets error messages when the email or password changes.
   */
  useEffect(() => {
    setEmailError(undefined);
    setPasswordError(undefined);
    setMainError(undefined);
  }, [email, password]);

  return (
    <form className={styles.loginFormWrapper} onSubmit={handleSubmit}>
      {/* Header */}
      <div className={styles.header}>ログイン</div>

      {/* Form content */}
      <div className={styles.formContent}>
        {/* Email Input */}
        <div className={styles.inputField}>
          <p>メールアドレスまたはユーザー名</p>
          <InputField value={email} onChange={setEmail} />
          {emailError && <p className={styles.errorMessage}>{emailError}</p>}
        </div>

        {/* Password Input */}
        <div className={styles.inputField}>
          <div className={styles.inputLabels}>
            <p>パスワード</p>
            <p
              className={styles.forgotPasswordLink}
              onClick={handleToggleLoginShow}
            >
              パスワードを忘れた
            </p>
          </div>
          <InputField type="password" value={password} onChange={setPassword} />
          {passwordError && (
            <p className={styles.errorMessage}>{passwordError}</p>
          )}
        </div>

        {/* Login Button */}
        <ButtonComponent content={"ログイン"} onClick={handleSubmit} />

        {/* Main Error Message */}
        {mainError && <p className={styles.errorMessage}>{mainError}</p>}
      </div>
    </form>
  );
};

export default LoginForm;
