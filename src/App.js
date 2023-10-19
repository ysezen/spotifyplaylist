import 'bulma/css/bulma.css';
import './App.css';
import {Routes, Navigate, Route} from 'react-router-dom';
import Navbar from './components/pages/Navbar';
import Auth from  './components/pages/Auth';
import Playlist from './components/pages/Playlist';
import Home from './components/pages/Home';
import SignOut from './components/pages/Signout';


function App() {
  
  return (
    <div className="App">      
      <Routes>
        <Route path='/' element={<Navigate to='/home' />}/>        
        <Route path='/home' element={<Home />}/> 
        <Route path='/auth' element={<Auth/>}/>        
        <Route path='/playlist' element={<Playlist/>}/>        
        <Route path='/signout' element={<SignOut/>}/>
      </Routes>
      {localStorage.getItem('access_token') ? (<Navbar />) :(<></>)}
    </div>
  );
}

export default App;
