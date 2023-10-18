class getPlaylistCurrentUserObj {   
      endpoint='https://api.spotify.com/v1/me/playlists';
      limit = 20;
      offset = 0;
      headers = {
         Authorization: 'Bearer ' + localStorage.getItem('access_token')
      }   
}

export {getPlaylistCurrentUserObj}