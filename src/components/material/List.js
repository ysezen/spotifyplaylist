import React from 'react';
import styles from '../../css/Materials.module.css';

export default function List(props) {

   const playlists = Array.isArray(props) ? props : props.playlists;   
   const handleClick = Array.isArray(props) ? props : props.handleClick; 

   const listItems = playlists.map((playlist, index) => (
      <li className={styles.listitem} key={playlist.id} value={playlist.playlistid}>{playlist.name}</li>
   ));

   return (
      <div className={styles.listContainer}>
         <h1 className={styles.listTitle}>PlayList</h1>
         <ul>
            {listItems}            
         </ul>
      </div>
   )
}