/**
 * @file Navbar.jsx
 * @description A reusable navigation bar component for the application.
 *
 * @component
 * @param {Object} props - Component properties.
 * @param {JSX.Element | null} [props.additionalContents=null] - Optional additional content to be displayed in the navbar.
 * @returns {JSX.Element} The Navbar component.
 */

import styles from "./Navbar.module.css";

/**
 * Navbar Component
 *
 * @description This component renders a navigation bar with a logo and an optional 
 * additional content section that can be passed as a prop.
 *
 * @param {Object} props - Component properties.
 * @param {JSX.Element | null} [props.additionalContents=null] - Optional additional content to be displayed in the navbar.
 * @returns {JSX.Element} A navigation bar.
 */
const Navbar = ({ additionalContents = null }) => {  
  return (
    <div className={styles.navbar}>
      {/* Logo Section */}
      <div className={styles.logo}>
        <img src="/photos/logo.svg" alt="Logo" />
        <h2 className={styles.logoHeader}>Service Name</h2>
      </div>

      {/* Optional additional contents */}
      {additionalContents && <div className={styles.additional}>{additionalContents}</div>}
    </div>
  );
};

export default Navbar;
