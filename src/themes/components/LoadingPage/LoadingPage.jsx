/**
 * @file LoadingPage.jsx
 * @description A loading screen component that displays a logo, tagline, and a loading animation.
 * 
 * @component
 * @returns {JSX.Element} The LoadingPage component.
 */

import styles from "./LoadingPage.module.css";

/**
 * LoadingPage Component
 * 
 * @description This component is used as a loading screen, displaying a logo, a tagline, 
 * and a loading animation while waiting for content to load.
 *
 * @returns {JSX.Element} A full-page loading screen.
 */
const LoadingPage = () => {
  return (
    <div className={styles.loadingPage}>
      {/* Container for logo and tagline */}
      <div className={styles.contents}>
        <div className={styles.logo}>
          <img src="/photos/logo.svg" alt="Logo" />
          <h2>Logotype</h2>
        </div>
        <p>Taglines</p>
      </div>

      {/* Loading animation */}
      <img className={styles.loader} src="/icons/Loader.png" alt="Loading..." />
    </div>
  );
};

export default LoadingPage;
