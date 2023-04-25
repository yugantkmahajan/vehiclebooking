import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserDetails from './components/SubmitForm/FirstPage';
import WheelType from './components/SubmitForm/SecondPage';
import BookingDate from './components/SubmitForm/ThirdPage';
import VehicleDetails from './components/SubmitForm/FourthPage';

function App() {
  return (

    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path="/" element={<UserDetails />} />
          <Route path="/Wheels" element={<WheelType />} />
          <Route path="/Bookings" element={<BookingDate />} />
          <Route path="/VehicleDetails" element={<VehicleDetails />} />  
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
