import Converter from "./ObjectConverter";

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
         window.location.href = 'http://localhost:3000/login';                
      }else if(Date.now() > _expiresIn){
         localStorage.removeItem('access_token');
         localStorage.removeItem('expiresIn');
         window.location.href = 'http://localhost:3000/login';
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
    getMyPlayList() {
      const accessToken = this.getAccessToken();
      return fetch('https://api.spotify.com/v1/me/playlists', {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
        .then(response => response.json())
        .then(data => {
          return Converter.toPlayList(data);
        });
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
        return Converter.toTracks(data);
      } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
      }
    }

};

export default SpotifyManager;