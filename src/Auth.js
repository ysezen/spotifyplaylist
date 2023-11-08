import React,{useEffect} from 'react'

export default function Auth() {
   useEffect(() => {      
      const hash = window.location.hash
         .substring(1)
         .split('&')
         .reduce(function (initial, item) {
            if (item) {
               var parts = item.split('=');
               initial[parts[0]] = decodeURIComponent(parts[1]);
            }
            return initial;
         }, {});
      window.location.hash = '';      
      const _token = hash.access_token;
      const _expiresIn = hash.expires_in;
      if (_token) {
         localStorage.setItem('access_token', _token);
         localStorage.setItem('expiresIn', (_expiresIn *1000) + Date.now());
         window.location.href = 'http://localhost:3000/home';
      }
   }, [])

  return (
    <div><a href='http://localhost:3000/'>Please click.</a>.</div>
  )
}
