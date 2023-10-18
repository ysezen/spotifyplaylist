import React, { useEffect } from 'react';
import styles from '../../css/Component.module.css';
import styleshome from '../../css/Home.module.css';
import { getLocalStorage,getUrlParams } from '../../services/worker/AuthPKCE'
import image from '../../images/spotify2.png'

export default function SignOut() {  
  return (
    <>
      <div className={styles.bodyContainer}>
        <div className={styleshome.homeBg}>
          <img className={styles.mainImg} src={image} alt="oldu mu?" />
          <p>SignOut, Click <a href="/auth">Sign In</a> for reLogin</p>
        </div>
      </div>
    </>
  );
}
