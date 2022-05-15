
import './App.css';

import Navbar from './Component/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Pages/Home/Home';
import About from './Component/Pages/About/About';
import Login from './Component/Pages/Login/Login';
import Review from './Component/Pages/Review/Review';

import Contact from './Component/Pages/Contact/Contact';

import Apointments from './Component/Pages/Appointments/Apointments';

import SignUp from './Component/Pages/SignUp/SignUp';
import RequireAuth from './Component/Pages/RequireAuth/RequireAuth';


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/reviews' element={<Review></Review>}></Route>
        <Route path='/appointment' element={

          <RequireAuth>
            <Apointments></Apointments>
          </RequireAuth>


        }></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>

      </Routes>

      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
