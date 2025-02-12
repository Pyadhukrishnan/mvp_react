import React, { useEffect, useState } from "react";
import styles from "./LoginForm.module.css";
import InputField from "../../../../themes/components/InputField/InputField";
import ButtonComponent from "../../../../themes/components/ButtonComponent/ButtonComponent";
import UseLoginServices from "../../services/LoginServices";

const LoginForm = ({ setShowLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(undefined);
  const [passwordError, setpasswordError] = useState(undefined);
  const [mainError, setMainError] = useState(undefined);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await UseLoginServices().login(email, password);
    setEmailError(response.errors.emailError);
    setpasswordError(response.errors.passwordError);
    setMainError(response.errors.mainError);
    console.log(response)
  };

  const handleToggleLoginShow = () => {
    setShowLogin(false);
  };

  useEffect(() => {
    setEmailError(undefined);
    setpasswordError(undefined);
    setMainError(undefined);
  }, [email, password]);
  return (
    <form className={styles.loginFormWrapper} onSubmit={handleSubmit}>
      <div className={styles.header}>ログイン</div>

      <div className={styles.formContent}>
        <div className={styles.inputField}>
          <p>メールアドレスまたはユーザー名</p>
          <InputField value={email} onChange={setEmail} />
          {emailError && <p className={styles.errorMessage}>{emailError}</p>}
        </div>

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
        <ButtonComponent content={"ログイン"} onClick={handleSubmit} />
        {mainError && <p className={styles.errorMessage}>{mainError}</p>}
      </div>
    </form>
  );
};

export default LoginForm;
