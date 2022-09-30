
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import Profile from "./components/profile/profile";
import Login from './pages/Login/Login';
import UploadFile from './components/UploadFile/Uploadfile';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  return (
   <Router>
    <Routes>
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/home' element={<Home />} />
      <Route path='/upload' element={<UploadFile />} />
    </Routes>
   </Router>
   
  );
}

export default App;
