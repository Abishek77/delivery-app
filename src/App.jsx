
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Login from './pages/Login'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from './pages/Dashboard';
import Footer from './components/common/Footer';
import Profile from './pages/Profile';

function App() {


  return (
    <>
    <Routes>
    <Route path='/' element={ <Login/>}/>
      <Route path='dashboard' element={<Dashboard/>}/>
      <Route path='profile' element={<Profile/>}/>
    </Routes>
    
     <ToastContainer />
     <Footer/>
    </>
  )
}

export default App
