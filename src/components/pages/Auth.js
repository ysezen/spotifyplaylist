import React, { useEffect } from 'react';
import styles from '../../css/Component.module.css';
import { AuthReqPKCE, getUrlParams, accessTokenReq, getLocalStorage } from '../../services/worker/AuthPKCE';
import image from '../../images/spotify2.png';

export default function Auth() {  
  const authCheck = async () => {
    const tokenCheck = await getLocalStorage('access_token');
    const authorizationCheck = await getLocalStorage('code') ? true : await getUrlParams('code');

    if (tokenCheck) {
      window.location = 'http://localhost:3000/home';
    } else if (authorizationCheck) {
      // eslint-disable-next-line
      const result = accessTokenReq()
        .then(response => {          
          if (!response.ok) {
            throw new Error('HTTP status ' + response.status);
          }
          return response.json();
        })
        .then(data => {
          localStorage.setItem('access_token', data.access_token);
          window.location = 'http://localhost:3000/home';
        })
        .catch(error => {
          localStorage.clear();
          window.location = 'http://localhost:3000/auth';
          /* console.error('Error:', error); */
        });
    } else {
      AuthReqPKCE();
    }
  }; 

    useEffect(()=>{
      authCheck();
    });

  return (
    <div className={styles.bodyContainer}>
      <div className={styles.mainImg} onClick={AuthReqPKCE}>

        <img className={styles.mainImg} src={image} alt="oldu mu?"/>
        {/* <p>Please <br></br> Sign In</p> */}
      </div>
    </div>
  );
}