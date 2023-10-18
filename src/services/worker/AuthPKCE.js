import { AuthReqPKCEObj,AccessTokenReqPKCEObj } from "../objects/ApiObjects";

function generateRandomString(length) {
   let text = '';
   let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

   for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
   }
   return text;
};

async function generateCodeChallenge(codeVerifier) {
   function base64encode(string) {
      return btoa(String.fromCharCode.apply(null, new Uint8Array(string)))
         .replace(/\+/g, '-')
         .replace(/\//g, '_')
         .replace(/=+$/, '');
   }

   const encoder = new TextEncoder();
   const data = encoder.encode(codeVerifier);
   const digest = await window.crypto.subtle.digest('SHA-256', data);

   return base64encode(digest);
};

async function AuthReqPKCE() {
   let codeVerifier = generateRandomString(128);  

    generateCodeChallenge(codeVerifier).then(codeChallenge => {
      let state = generateRandomString(16);
      localStorage.setItem('code_verifier', codeVerifier);      

      let params = new URLSearchParams(new AuthReqPKCEObj(
         '2054164ed4174c6aab877310ea9eee9f',
         'http://localhost:3000/home',
         state,
         codeChallenge
      ));

      window.location = 'https://accounts.spotify.com/authorize?' + params;
   }); 
};

const accessTokenReq = async ()=> {

   let params = new URLSearchParams(new AccessTokenReqPKCEObj(
      localStorage.getItem('code'),
      'http://localhost:3000/home',
      '2054164ed4174c6aab877310ea9eee9f'
   ));

   // eslint-disable-next-line
  const response = await fetch('https://accounts.spotify.com/api/token', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: params
})
return response;
};

async function getUrlParams(...params) {   
   const queryParams = window.location.search;
   const urlParams = new URLSearchParams(queryParams);
   const matchedParams = {};
   let matchedAll = true;     
 
   for (const param of params) {
     if (urlParams.has(param)) {
       matchedParams[param] = urlParams.get(param);
       localStorage.setItem(param,matchedParams[param]);       
     }else{
      matchedAll = false;
     }
   }   
   return matchedAll;
 };

 async function getLocalStorage(param){
   const paramValue = localStorage.getItem(param);
   return paramValue ? true : false;
 }

 async function handle401(){
   localStorage.clear()   
 };

export { AuthReqPKCE,getUrlParams,accessTokenReq,handle401,getLocalStorage };