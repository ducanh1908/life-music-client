
import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import Information from "./components/profile/information";
import Profile from "./components/profile/profile";
import UpdatePassword from "./components/profile/updatePassword";
import UpdateProfile from "./components/profile/updateProfile";
import Song from './components/Songs/Song';
import Upload from './components/UploadFile/Uploadfile';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

import GuestContent from './components/GuestContent/GuestContent';
import Library from './components/Library/Library';
import Playlist from "./components/Playlist/Playlist";
import Search from './Search/Search';
import HomeFooter from './components/HomeFooter/HomeFooter';

function App() {

  return (
   <Router>
    <Routes>
      {/* <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/' element={<Home />} >
          <Route path='upload' element={<Upload />} /> 
          <Route path='songs' element={<Song />} />     
      </Route>
      <Route path='profile' element={<Profile />} >
            
        <Route path=""  element={<Information />} />
        <Route path="update" element={<UpdateProfile />} />
        <Route path="password" element={<UpdatePassword />} />
      </Route> */}

      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/' element={<Home />} >
        <Route path='' element={<GuestContent />} />
        <Route path='upload' element={<Upload />} />
        <Route path='song' element={<Song />} />
        <Route path='library' element={<Library />} />
        <Route path="playlist/:id" element={<Playlist />} />
        <Route path ='song-list' element={<HomeFooter />} />
        {/* <Route path="search" element={<Search />} /> */}
      </Route>
      <Route path='profile' element={<Profile />} >  
            <Route path=""  element={<Information />} />
            <Route path="update" element={<UpdateProfile />} />
            <Route path="password" element={<UpdatePassword />} />
      </Route>
    </Routes>
   </Router>
   
  );
}

export default App;
