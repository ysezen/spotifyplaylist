import React, { useState, useCallback, useEffect } from "react"
import './style.css';
import { SpotifyManager } from "./SpotifyManager";
import { SpotifyObjects } from "./Spotifyobjects";

function App() {
  const [userProfile, setUserProfile] = useState(SpotifyObjects.user);
  const [userPlaylists, setUserPlaylists] = useState(SpotifyObjects.playlist);
  const [activePlaylist, setActivePlaylist] = useState(SpotifyManager.activePlaylist);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(SpotifyObjects.searchResult);

  const [playlistTracks, setPlaylistTracks] = useState(SpotifyObjects.playlistTrack);

  useEffect(() => {
    getMyProfile();
    getMyPlayList();
  }, []);

  useEffect(() => {
    console.log(activePlaylist);
    if (activePlaylist) {
      document.getElementById("playlisttitle").innerHTML = activePlaylist.name + ' - ' + activePlaylist.tracks.total + ' tracks';
    }
  }, [activePlaylist]);


  useEffect(() => {
    console.log(activePlaylist);
    if (userPlaylists) {
      document.getElementById("profiletittle").innerHTML = userProfile.display_name + ' - ' + userPlaylists.total + ' playlist';
    }
  }, [userPlaylists]);

  const getMyProfile = useCallback(() => {
    SpotifyManager.getMe()
      .then((profile) => {
        setUserProfile(profile);
      })
      .catch((error) => {
        console.error("Error fetching user profile:", error);
      });
  }, []);

  const getMyPlayList = useCallback(() => {
    SpotifyManager.getMyPlayList()
      .then((playlists) => {
        setUserPlaylists(playlists);        
      })
      .catch((error) => {
        console.error("Error fetching user playlists:", error);
      });
  }, []);

  const getItemsPlaylist = (selectedPlaylist) => {
    SpotifyManager.getPlayListTracks(selectedPlaylist.id)
      .then((tracks) => {        
        if (tracks.total !== 0) {
          setPlaylistTracks(tracks);          
          setActivePlaylist(selectedPlaylist);
          console.log(activePlaylist);
        } else {
          setActivePlaylist(selectedPlaylist);  
          setPlaylistTracks(SpotifyObjects.playlistTrack);        
          window.alert("Playlist empty");
        }       
        
      })
      .catch((error) => {
        console.error("Error fetching playlist tracks:", error);
      });
  };

  const searchTrack = (event) => {
    event.preventDefault();
    SpotifyManager.search(searchTerm)
      .then((tracks) => {
        setSearchResults(tracks);
      })
      .catch((error) => {
        console.error("Error fetching playlist tracks:", error);
      });
  };


  const removeTracksFromPlaylist = (playlistId, trackUris) => {
    SpotifyManager.removeTracksFromPlaylist(playlistId, trackUris)
      .then((data) => {             
        window.alert("Track removed from playlist");
        getItemsPlaylist(activePlaylist);
      })
      .catch((error) => {        
        window.alert(error);
        console.error("Error removing tracks from playlist:", error);
      });
  };


  const addTracksToPlaylist = (playlistId, trackUris) => {
    debugger;
    SpotifyManager.addTracksToPlaylist(playlistId, trackUris)
      .then((data) => {             
        window.alert("Track added to playlist");
        getItemsPlaylist(activePlaylist);
      })
      .catch((error) => {        
        window.alert(error);
        console.error("Error adding tracks to playlist:", error);
      });
  };

  return (
    <>
      <div className="header">
        <h1>Spotify Playlist Manager</h1>
      </div>

      <div className="gridLayout">
        <div className="groupContainer">
          <div className="h100">
            <h3 id="profiletittle"></h3>            
            <ul>
              {userPlaylists.items !== 0 ? userPlaylists.items.map(playlist => (
                <li title={playlist.name} key={playlist.id} onClick={() => getItemsPlaylist(playlist)}>
                  {playlist.name}
                </li>
              )) : <li>Empty</li>}
            </ul>
          </div>
        </div>

        <div className="groupContainer">
          <div className="h100">
            <h3 id="playlisttitle"></h3>            
            <ul>
              {playlistTracks.items[0].track.name !== "string" ? playlistTracks.items.map(item => (
                <li key={item.track.id} title={item.track.name}>
                  <span onClick={() => removeTracksFromPlaylist(activePlaylist.id, item.track.uri)} style={{cursor: 'pointer'}}>✖</span>
                  <>{item.track.name.length > 60 ? item.track.name.slice(0,60)+'...':item.track.name}</>
                </li>
              )) : <li>Select Another Playlist or Add Song</li>}
            </ul>
          </div>
        </div>

        <div className="groupContainer">
          <div className="h100">            
            <form onSubmit={searchTrack}>
              <input onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm} placeholder="Type here for search"></input>
            </form>
            {searchResults.tracks.items.length > 1 ?
                <>
                  <p></p>
                  <p>Artist & AlbumName & Track Name.</p>
                </>
                : ""}
            <ul>
              {searchResults.tracks.items.length > 1 ?
                searchResults.tracks.items.map(track => (
                  <li key={track.id}>
                    <span onClick={() => addTracksToPlaylist(activePlaylist.id,track.uri)} style={{cursor: 'pointer'}}>➕</span>
                    {track.album.artists[0].name} & {track.album.name} & {track.name}
                  </li>
                )) : ""}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;