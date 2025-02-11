import styles from "./LoadingPage.module.css";

const LoadingPage = () => {
  return (
    <div className={styles.loadingPage}>
      <div className={styles.contents}>
        <div className={styles.logo}>
          <img src="/photos/logo.svg" alt="" />
          <h2>Logotype</h2>
        </div>
        <p>Taglines</p>
      </div>
      <img className={styles.loader} src="/icons/Loader.png" alt="" />
    </div>
  );
};

export default LoadingPage;
