import React, { useState } from 'react'
import LoginForm from '../components/LoginForm/LoginForm';
import styles from './LoginPage.module.css';
import ResetPasswordForm from '../components/ResetPasswordForm/ResetPasswordForm';

const Loginpage = () => {
  const [showLogin,setShowLogin] = useState(true);
  return (
   <div className={styles.loginPageWrapper}>
    {showLogin?<LoginForm setShowLogin={setShowLogin}/>:<ResetPasswordForm setLoginToggle={setShowLogin}/>

    }
   </div>
  )
}

export default Loginpage