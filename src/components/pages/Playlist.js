import React, { useEffect, useState } from 'react';
import styles from '../../css/Component.module.css';
import List from '../material/List';
import { getPlaylistCurrentUser } from '../../services/worker/PlaylistManagement';
import { getLocalStorage } from '../../services/worker/AuthPKCE';
import image from '../../images/spotify2.png';

export default function PlayList() {

  const [playlists, setPlaylists] = useState([]);

  const authCheck = async () => {
    const tokenCheck = await getLocalStorage('access_token');
    if (!tokenCheck) {
      window.location = 'http://localhost:3000/auth';
    } else {
      const response = await getPlaylistCurrentUser().then((response) => {
        if (response.status !== 200) {
          localStorage.removeItem('access_token');
          window.location = 'http://localhost:3000/auth';
        }
        return response.json();
      }).then((result) => {
        const items = result.items;
        const playlistNames = items.map((item, index) => {
          const id = `playlist-${index}`;
          const playlistid = item.id;
          return { id: id, playlistid: playlistid, name: item.name };
        });
        console.log(playlistNames);

        setPlaylists(playlistNames);
      })
        .catch((error) => {
          console.log(error);
        })
    };
  }

  useEffect(() => {
    authCheck();
  }, []);

  return (
    <>
      <div className={`${styles.bodyContainer} ${styles.bodyflexrow}`}>
        <List playlists={playlists} />
      </div>
      <div className={`${styles.bodyContainer} ${styles.bodyflexrow}`}>
        
      </div>
    </>

  )
}