
const clientId = '2054164ed4174c6aab877310ea9eee9f';
const redirectUri = 'http://localhost:3000/';
let accessToken = '';
let expireTime = 0;

const SpotifyManager = {
  getAccessToken() {
    accessToken = window.localStorage.getItem('accessToken');
    expireTime = +window.localStorage.getItem('expireTime');
    const att = Date.now();
    if (att < expireTime && accessToken) {
      return accessToken;
    } else {
      const urlAccessToken = window.location.href.match(/access_token=([^&]*)/);
      const urlExpiresIn = window.location.href.match(/expires_in=([^&]*)/);
      if (urlAccessToken && urlExpiresIn) {
        accessToken = urlAccessToken[1];
        window.localStorage.setItem('accessToken', accessToken);
        const expiresIn = Number(urlExpiresIn[1]);
        window.localStorage.setItem('expireTime', Date.now() + (expiresIn * 1000) - 1000);
        window.setTimeout(() => accessToken = '', expiresIn * 1000);
        window.history.pushState('Access Token', null, '/');
      } else {
        const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
        window.location = accessUrl;
      }
    }

  },

  getMe() {
    const accessToken = this.getAccessToken();

    return fetch(`https://api.spotify.com/v1/me`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    })
      .then(response => response.json())
      .then(data => {
        return data;
      }).catch(error => {
        console.error("Error fetching user profile:", error);
      });
  },

  search(term) {
    const accessToken = SpotifyManager.getAccessToken();
    return fetch(`https://api.spotify.com/v1/search?limit=10&offset=0&type=track&q=${term}`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    })
      .then(response => response.json())
      .then(data => {
        return data;
      });
  },

  getMyPlayList() {
    const accessToken = this.getAccessToken();
    return fetch('https://api.spotify.com/v1/me/playlists', {
      headers: { Authorization: `Bearer ${accessToken}` },
    })
      .then(response => response.json())
      .then(data => {
        return data;
      });
  },

  getPlayListTracks(playlistId) {
    const accessToken = this.getAccessToken();

    return fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks?limit=10&offset=0`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    })
      .then(response => response.json())
      .then(data => {
        return data;
      });
  },

  removeTracksFromPlaylist(playlistId, trackUris) {
    const accessToken = this.getAccessToken();

    return fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "tracks": [
          {
            "uri": trackUris
          }
        ]
      }),
    })
      .then(response => response.json())
      .then(data => {
        return data;
      }).catch(error => {
        return new Error(error.message);
      });
  },

  addTracksToPlaylist(playlistId, trackUris) {
    const accessToken = this.getAccessToken();

    return fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "uris": [
          trackUris
        ],
        "position": 0
      }),
    })
      .then(response => response.json())
      .then(data => {
        return data;
      }).catch(error => {
        return new Error(error.message);
      });
  }
};

export {SpotifyManager};


