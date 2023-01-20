import React from 'react';

import styles from './Loader.module.scss';

const Loader = () => {
  return (
    <div className={styles.loaderWrapper}>
      <div className={styles.load}>
        <div className={styles.hamburger}>
          <div className={styles['top-bun']}></div>
          <div className={styles.pickle}></div>
          <div className={styles.pickle}></div>
          <div className={styles.tomato}>
            <div></div>
          </div>
          <div className={styles.tomato}>
            <div></div>
          </div>
          <div className={styles.cheese}></div>
          <div className={styles.cheese}></div>
          <div className={styles.beef}></div>
          <div className={styles['bottom-bun']}></div>
        </div>
        <h1>Loading...</h1>
      </div>
    </div>
  );
};

export default Loader;
