
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
import DashBoard from './Component/Pages/DashBoard/DashBoard';
import MyAppointment from './Component/Pages/DashBoard/MyAppointment';
import MyReviews from './Component/Pages/DashBoard/MyReviews';
import MyHistory from './Component/Pages/DashBoard/MyHistory';
import AllUser from './Component/Pages/DashBoard/AllUser';
import RequireAdmin from './Component/Pages/RequireAdmin/RequireAdmin';
import AddDoctors from './Component/Pages/DashBoard/AddDoctors';
import ManageDoctor from './Component/Pages/DashBoard/ManageDoctor';



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

        <Route path='/dashboard' element={

          <RequireAuth>
            <DashBoard></DashBoard>
          </RequireAuth>


        }>
          <Route index element={<MyAppointment></MyAppointment>}></Route>
          <Route path='reviews' element={<MyReviews></MyReviews>}></Route>
          <Route path='myhistory' element={<MyHistory></MyHistory>}></Route>
          <Route path='alluser' element={<RequireAdmin><AllUser></AllUser></RequireAdmin>}></Route>
          <Route path='addDoctor' element={<RequireAdmin><AddDoctors></AddDoctors></RequireAdmin>}></Route>
          <Route path='manageDoctor' element={<RequireAdmin><ManageDoctor></ManageDoctor></RequireAdmin>}></Route>

        </Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>

      </Routes>

      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
