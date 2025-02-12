import { useState } from 'react';
import styles from './InputField.module.css';

const InputField = ({ theme = "default", type = "text", onChange,value}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [inputType,setInputType] = useState(type);


  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
    setInputType((prev)=>prev==="text"?"password":"text")
  };

  const setTheme = (theme) => {
    switch (theme) {
      case "error":
        return styles.error;
      default:
        return styles.default;
    }
  };

  const textChange = (e) => {
    onChange(e.target.value)
  }

  return (
    <div className={`${styles.default} ${setTheme(theme)}`}>
      <input className={styles.inputField} type={inputType} onChange={textChange} value={value}/>
      {type === "password" && (
        <button type="button" className={styles.toggleButton} onClick={togglePasswordVisibility}>
          {isPasswordVisible ? "非表示" : "表示"}
        </button>
      )}
    </div>
  );
};

export default InputField;
