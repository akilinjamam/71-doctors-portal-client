import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Pages/Home/Home';
import About from './Component/Pages/About/About';
import Login from './Component/Pages/Login/Login';
import Review from './Component/Pages/Review/Review';
import Apointment from './Component/Pages/Appointment/Apointment';
import Contact from './Component/Pages/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/reviews' element={<Review></Review>}></Route>
        <Route path='/appointment' element={<Apointment></Apointment>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
      </Routes>
    </div>
  );
}

export default App;
