import React from 'react'
import { Link } from 'react-router-dom'
import '../../css/Navbar.module.css'
import { handle401 } from '../../services/worker/AuthPKCE';


function Navbar() {

  const signOut = () => {
    handle401();
  }

  const link = localStorage.getItem('access_token') ? (
    <>
      <Link to='/home'>Home</Link>
      <Link to='/playlist'>Playlists</Link>
      <Link onClick={signOut} to='/signout'>Sign Out</Link>
    </>
  ) : (
    <Link to='/auth'>Sign In</Link>
  );

  return (
    <nav>
      {link}
    </nav>
  );
}

export default Navbar;