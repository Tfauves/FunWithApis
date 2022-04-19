import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Navbar from "../Navbar/NavBar";
import Home from "../Home/Home";
import Chuck from '../Chuck/Chuck';
import Weather from '../Weather/Weather';
import Coins from '../Coins/Coins';
// import Login from '../Auth/Login';
// import Register from '../Auth/Register';
// import Profile from "../Profiles/Profile"

const AppRouter = () => {

  return (
    <div style={{width: '100%'}}>
      <Navbar />
      <div style={{ marginTop: "50px", width: "100%"}}>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chuck" element={<Chuck />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/coins" element={<Coins />} />
          {/* <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/:ownId" element={<Profile />} /> */}
        </Routes>
      </div>
    </div>
  )
}

export default AppRouter;