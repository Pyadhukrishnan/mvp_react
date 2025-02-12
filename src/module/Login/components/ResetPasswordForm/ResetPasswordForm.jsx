import React from "react";
import styles from "./ResetPasswordForm.module.css";

const ResetPasswordForm = ({ setLoginToggle }) => {
  const handleLoginToggle = () => {
    setLoginToggle(true);
  };
  return (
    <div className={styles.resetPasswordForm}>
      <h2>ResetPasswordForm</h2>
      <p onClick={handleLoginToggle}>back</p>
    </div>
  );
};

export default ResetPasswordForm;
