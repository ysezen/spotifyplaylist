import React from 'react';


function UserPlaylists({ playlists, onCreateNewPlaylist }) {
  return (
   <div className="UserPlaylists">
   <h2>Your Playlists</h2>
   <ul>
     {playlists.map(playlist => (
       <li key={playlist.id}>
         {playlist.name}
       </li>
     ))}
   </ul>   
 </div>
  );
}

export default UserPlaylists;