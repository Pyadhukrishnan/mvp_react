import { useState } from 'react';
import styles from './InputField.module.css';

const InputField = ({ theme = "default", type = "text" }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);


  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const setTheme = (theme) => {
    switch (theme) {
      case "error":
        return styles.error;
      default:
        return styles.default;
    }
  };

  return (
    <div className={`${styles.default} ${setTheme(theme)}`}>
      <input className={styles.inputField} type={type}/>
      {type === "password" && (
        <button type="button" className={styles.toggleButton} onClick={togglePasswordVisibility}>
          {isPasswordVisible ? "非表示" : "表示"}
        </button>
      )}
    </div>
  );
};

export default InputField;
