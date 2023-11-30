import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Homepage from "../components/Homepage";
import MeetPage from "../components/MeetPage";
import MatchesPage from "../components/MatchesPage";
import ProfilePage from "../components/ProfilePage";
import Community from  "../components/Community";
import Chat from  "../components/Chat";
import Profile from  "../components/Profile";
import Signup from  "../components/Signup";

export default function NavRoutes() {
  return (
      <div className="pt-5">
        <BrowserRouter>

          <Route exact path="/">
            <Homepage />
          </Route>


          <Route exact path="/home">
            <Homepage />
          </Route>

          <Route exact path="/profile">
            <Profile />
          </Route>

          <Route path="/meet">
            <ProfilePage />
          </Route>

          <Route path="/chat">
            <Chat />
          </Route>

          <Route path="/explore">
            <ProfilePage />
          </Route>

          <Route path="/login">
            <ProfilePage />
          </Route>

          <Route path="/signup">
            <Signup />
          </Route>

          <Route path="/guidelines">
            <Community />
          </Route>





        </BrowserRouter>
      </div>
  );
}


