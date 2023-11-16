import Converter from "./ObjectConverter";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SpotifyManager = {
   checkLogin() {
      const accessToken = localStorage.getItem('access_token');
      const _expiresIn = localStorage.getItem('expiresIn');

      if (!accessToken) {
         return false;
      }else if(Date.now() > _expiresIn){
         localStorage.removeItem('access_token');
         localStorage.removeItem('expiresIn');
         return false;
      }
      else{
         return true;
      }
   },
   getAccessToken() {
      const accessToken = localStorage.getItem('access_token');
      const _expiresIn = localStorage.getItem('expiresIn');

      if (!accessToken) {
         window.location.href = `${window.location.origin}/login`;                
      }else if(Date.now() > _expiresIn){
         localStorage.removeItem('access_token');
         localStorage.removeItem('expiresIn');
         window.location.href = `${window.location.origin}/login`;
      }else{
      return localStorage.getItem('access_token');
      }
   },
   async getMe() {
      const accessToken = this.getAccessToken();
  
      try {
         const response = await fetch(`https://api.spotify.com/v1/me`, {
            headers: { Authorization: `Bearer ${accessToken}` },
         });
         const data = await response.json();
         return Converter.toMe(data);
      } catch (error) {
         console.error("Error fetching user profile:", error);
      }
    },
    async getMyPlayList() {
      const accessToken = this.getAccessToken();
      try {
        const response = await fetch('https://api.spotify.com/v1/me/playlists', {
          headers: { Authorization: `Bearer ${accessToken}` },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }    
        const data = await response.json();           
        return Converter.toPlayList(data);
        
      } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
      }       
    },

    async getPlayListTracks(playlistId) {
      const accessToken = this.getAccessToken();
      try {
        const response = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks?limit=10&offset=0`, {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
    
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }    
        const data = await response.json();                
        return data;
        

      } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
      }
    },

    async search(term) {
      const accessToken = this.getAccessToken();
      try {
        const response = await fetch(`https://api.spotify.com/v1/search?q=${term}&type=track`, {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
    
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }    
        const data = await response.json();
        return Converter.toSearchTracks(data);

      } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
      }
    },

    async removeItemFromPlayList(playlistId, trackId) {
      const accessToken = this.getAccessToken();
      try {
        const response = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
          method: 'DELETE',
          headers: { 
            Authorization: `Bearer ${accessToken}`, 
            'Content-Type': 'application/json' },
          body: JSON.stringify({ tracks: [{ uri: `spotify:track:${trackId}` }] })
        });
    
        if (!response.ok) {

          const err = await response.json();

          throw new Error(err.error.message);
        }    
        const data = await response.json();
        return data;

      } catch (error) {
        return toast.error(error.message);
      }
    },

    async addItemToPlayList(playlistId, trackId) {
      const accessToken = this.getAccessToken();
      try {
        const response = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
          method: 'POST',
          headers: { 
            Authorization: `Bearer ${accessToken}`, 
            'Content-Type': 'application/json' },
            body: JSON.stringify({  uris: [`spotify:track:${trackId}`]  })
        });
    
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }    
        const data = await response.json();
        return data;

      } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
      }
    }

};

export default SpotifyManager;