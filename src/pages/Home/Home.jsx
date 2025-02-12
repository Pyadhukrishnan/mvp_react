import React from 'react';
import styles from './Home.module.css';
import withAuth from '../../middleware';

function Home() {
  return (
    <div className={styles.homePage}>
      <h2>Home</h2>
    </div>
  )
}

export default withAuth(Home);