/**
 * @file LoginPage.jsx
 * @description This component handles the authentication UI, allowing users to switch between 
 * login and password reset forms.
 * 
 * @component
 * @returns {JSX.Element} The LoginPage component.
 * 
 * @dependencies
 * - React (useState)
 * - LoginForm (Login form component)
 * - ResetPasswordForm (Password reset component)
 * - CSS Module (LoginPage.module.css)
 */

import React, { useState } from 'react';
import LoginForm from '../components/LoginForm/LoginForm';
import ResetPasswordForm from '../components/ResetPasswordForm/ResetPasswordForm';
import styles from './LoginPage.module.css';

/**
 * @function LoginPage
 * @description Manages authentication forms, allowing users to toggle between login 
 * and reset password forms.
 * 
 * @returns {JSX.Element} The authentication UI containing either the login form or password reset form.
 */
const LoginPage = () => {
  // State to toggle between login form and password reset form
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className={styles.loginPageWrapper}>
      {/* Conditional rendering of login or password reset form */}
      {showLogin ? (
        <LoginForm setShowLogin={setShowLogin} />
      ) : (
        <ResetPasswordForm setLoginToggle={setShowLogin} />
      )}
    </div>
  );
};

export default LoginPage;
