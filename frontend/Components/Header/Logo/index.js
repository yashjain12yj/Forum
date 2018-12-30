import React, { Component } from 'react';
import styles from './styles';

const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <div className={styles.logo}>
        <img src="https://i.imgur.com/mMoICWw.png" alt="logo" width="40px" height="40px"/>
        
      </div>
      <div className={styles.logoTitle}>YJForum</div>
    </div>
  );
};

export default Logo;
