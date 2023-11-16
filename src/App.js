import React from "react";
import { Routes, Navigate, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Auth from "./Auth";
import Search from "./Pages/Search";
import LeftSide from "./Pages/LeftSide";
import './App.css';
import SpotifyManager from "./Services/SpotifyManager";
import { useEffect } from "react";

function App() {
  const [isToken, setIstoken] = React.useState(false);

  useEffect(() => {
    const result = SpotifyManager.checkLogin();
    setIstoken(result);    
  }, [isToken]);

  if (isToken) {
    return (
      <div className="app">
        <ToastContainer />
        <div className="mainHome">
          <LeftSide />
          <Routes>
            <Route path='/' element={<Navigate to='/home' />} />
            <Route path='/home' element={<Home />} />            
            <Route path='/search' element={<Search />} />
            <Route path='/*' element={<Navigate to='/home' />} />
          </Routes>
        </div>
      </div>
    )
  } else {
    return (
      <div className="app">
        <div className="mainHome">          
          <Routes>
            <Route path='/callbackauth' element={<Auth />} />
            <Route path='/*' element={<Navigate to='/login' />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </div>
      </div>
    )
  }
}

export default App;