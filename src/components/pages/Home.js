import React, { useEffect } from 'react';
import styles from '../../css/Component.module.css';
import { getLocalStorage, getUrlParams } from '../../services/worker/AuthPKCE';
import image from '../../images/spotify2.png';

export default function Home() {

  const authCheck = async () => {
    const tokenCheck = await getLocalStorage('access_token');
    if (!tokenCheck) {
      window.location = 'http://localhost:3000/auth';
    };
  }
  useEffect(() => {
    getUrlParams('code');
    authCheck();
  })
  return (
    <>
      <div className={styles.bodyContainer}>
        <img className={styles.mainImg} src={image} alt="oldu mu?" />
      </div>
    </>
  );
}
