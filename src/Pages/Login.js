import './Login.css';
import logo from '../Assets/img/pictures/spotify2.png'
import { useEffect } from 'react';

export default function Login() {

   const clientId = '2054164ed4174c6aab877310ea9eee9f';
   const redirectUri = `https://creative-brigadeiros-30cff5.netlify.app/callbackauth`;

   const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;   

   const handleClick = ()=> {
      const accessToken = localStorage.getItem('access_token');
      const _expiresIn = localStorage.getItem('expiresIn');

      if (accessToken && (Date.now() < _expiresIn)){         
         window.location.href = '/home';

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