
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import Profile from "./components/profile/profile";
import Login from './pages/Login/Login';
import Upload from './components/UploadFile/Uploadfile';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Information from "./components/profile/information";
import UpdateProfile from "./components/profile/updateProfile";
import UpdatePassword from "./components/profile/updatePassword";
import Song from './components/Songs/Song';

function App() {

  return (
   <Router>
    <Routes>
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/' element={<Home />} >
          <Route path='upload' element={<Upload />} /> 
          <Route path='songs' element={<Song />} /> 
      </Route>
      <Route path='/profile' element={<Profile />} >
            
        <Route path=""  element={<Information />} />
        <Route path="update" element={<UpdateProfile />} />
        <Route path="password" element={<UpdatePassword />} />
      </Route>

      

    </Routes>
   </Router>
   
  );
}

export default App;
