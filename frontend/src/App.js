import React from 'react';
import NavRoutes from './Routes/NavRoutes';
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import MeetPage from './components/MeetPage';
import PlayerCard from "./components/PlayerCard";
import Community from  "./components/Community";
import Chat from "./components/Chat";
import Profile from './components/Profile';
import Signup from './components/Signup';

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
   
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/home"  element={<Homepage/>} />
        <Route path="/profile"  element={<Profile />} />
        <Route path="/meet"  element={<MeetPage/>} />
        <Route path="/chat"  element={<Chat/>} />
        <Route path="/matches"  element={<Homepage/>} />
        <Route path="/explore"  element={<Homepage/>} />
        <Route path="/login"  element={<Homepage/>} />
        <Route path="/signup"  element={<Signup />} />
        <Route path="/guidelines"  element={<Community/>} />
      </Routes>
     {/* <Route exact path="/" element={<Homepage/>} /> */}
            
    
  

</div>
)};

export default App; 