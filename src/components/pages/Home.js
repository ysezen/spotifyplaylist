import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import styles from '../../css/Home.module.css';
import '../../css/Navbar.module.css';
import List from '../material/List';
import { getPlaylistCurrentUser } from '../../services/worker/PlaylistManagement';
import { getLocalStorage, getUrlParams } from '../../services/worker/AuthPKCE';
import image from '../../images/spotify2.png';
import Navbar from './Navbar';
import PlayList from './Playlist';

export default function Home() {
  const [numContainers, setNumContainers] = useState(4);
  const [playlists, setPlaylists] = useState([]);

  const authCheck = async () => {
    const tokenCheck = await getLocalStorage('access_token');
    if (!tokenCheck) {
      window.location = 'http://localhost:3000/auth';
    };
    return tokenCheck;
  }

  useEffect(() => {
    getUrlParams('code');
    authCheck();

    const containers = document.querySelectorAll(`.${styles.container}`);
    setNumContainers(containers.length);
  }, []);

  return (
    <>
      <div className={`${styles.bodyContainer} ${styles.grid}`} style={{ '--num-containers': numContainers }}>
        <div className={`${styles.container} ${styles.flexColumn}`}>
          <div className={`${styles.container} ${styles.flexColumnLink}`}>
            <Navbar />
          </div>
          <div className={`${styles.container} ${styles.flexColumn}`}>
            <PlayList />
          </div>
        </div>
        <div className={`${styles.container} ${styles.flexColumn}`}>
        </div>

      </div>
    </>
  );
}