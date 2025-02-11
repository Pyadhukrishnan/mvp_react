import styles from "./Navbar.module.css";

const Navbar = ({ additionalContents = null }) => {  
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <img src="/photos/logo.svg" alt="Logo" />
        <h2 className={styles.logoHeader}>Service Name</h2>
      </div>
      {additionalContents && <div className={styles.additional}>{additionalContents}</div>}
    </div>
  );
};

export default Navbar;
