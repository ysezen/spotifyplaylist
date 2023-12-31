import './Login.css';
import logo from '../Assets/img/pictures/spotify2.png'
import { useEffect } from 'react';

export default function Login() {

   const clientId = process.env.REACT_APP_CLIENT_ID;
   const redirectUri = `${window.location.origin}/callbackauth`;
   /*test*/

   const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public user-read-private user-read-email playlist-read-private&redirect_uri=${redirectUri}`;
   const handleClick = ()=> {
      const accessToken = localStorage.getItem('access_token');
      const _expiresIn = localStorage.getItem('expiresIn');

      if (!accessToken) {
         window.location.href = accessUrl;
      }

      if (accessToken && (Date.now() < _expiresIn)){
         window.location.href = `${window.location.origin}/home`;

      }else {
         window.location.href = accessUrl;
      }
   }

   return (
      <div className="login">
         <div>
            <img src={logo} alt="logo" />
         </div>
         <div>
            <button onClick={handleClick}>Login</button>
         </div>
      </div>
   )
}
