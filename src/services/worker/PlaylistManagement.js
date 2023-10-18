import {getPlaylistCurrentUserObj} from '../objects/PlaylistObjects';
//Get a list of the playlists owned or followed by the current Spotify user.
const getPlaylistCurrentUser = async ()=>{
   const obj = new getPlaylistCurrentUserObj()
   let params = new URLSearchParams(obj);

   const response = await fetch(obj.endpoint, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('access_token')
      }
    })
   return response
}

export {getPlaylistCurrentUser}