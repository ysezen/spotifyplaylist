import React from 'react';
import styles from '../../css/HomeNew.module.css';

export default function HomeNew() {
  return (
<div className={`${styles.container}`}>
      <header className={`${styles.header}`}>
        {/* ... */}
      </header>
      <aside className={`${styles.sidebar}`}>
        {/* ... */}
      </aside>
      <main className={`${styles.main}`}>
        <div className={`${styles.featuredPlaylists}`}>
          <div className={`${styles.playlist}`}>
            {/* ... */}
            
          </div>
          <div className={`${styles.playlist}`}>
            {/* ... */}
            
          </div>
          <div className={`${styles.playlist}`}>
            {/* ... */}
            
          </div>
          <div className={`${styles.playlist}`}>
            {/* ... */}
            
          </div>
        </div>
      </main>
    </div>
  );
}