import Homepage from './pages/Homepage';
import './index.css';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/profile';
function App() {

  return (
    <Routes>
    <Route path='/' element={<Homepage/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/profile' element={<Profile/>}/>
    
    </Routes>
  );
}

export default App;