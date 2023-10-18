class AuthReqPKCEObj {
   constructor(client_id,redirect_uri,state,code_challenge)
   {
      this.response_type = 'code';
      this.client_id = client_id;
      this.scope = 'user-read-private user-read-email';      
      this.redirect_uri = redirect_uri;
      this.state = state;      
      this.code_challenge_method = 'S256';
      this.code_challenge = code_challenge;
   }
}

class AccessTokenReqPKCEObj {
   constructor(code,redirect_uri,client_id)
   {
      this.grant_type = 'authorization_code';
      this.code = code;      
      this.redirect_uri = redirect_uri;  
      this.client_id = client_id;    
      this.code_verifier = localStorage.getItem('code_verifier');    
   }
}

export {AuthReqPKCEObj,AccessTokenReqPKCEObj};