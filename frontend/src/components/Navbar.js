import React from "react";
import { Link } from "react-router-dom";
// import UserContext from "../auth/UserContext";
import GamePadIcon from '@mui/icons-material/SportsEsports';
import "./Navbar.css";

function Navbar() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <Link className="navbar-brand" to="/">
                 Gamer Date 
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation">

              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">

            <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/profile">
              Profile
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/meet">
              Meet
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/chat">
              Chat
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/matches">
              Matches
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/explore">
              Explore
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/signup">
              Signup
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/guidelines">
              Community Guidelines
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;



            {/* <ul className="navbar-nav ml-auto">
            <li className="nav-item mr-4">
              <Link className="nav-link" to="/">
               Homepage
              </Link>
            </li>
            <li className="nav-item mr-4">
              <Link className="nav-link" to="/home">
                Profile
              </Link>
            </li>
            <li className="nav-item mr-4">
              <Link className="nav-link" to="/profile">
                Login
              </Link>
            </li>
            <li className="nav-item mr-4">
              <Link className="nav-link" to="/meet">
                Meet
              </Link>
            </li>
            <li className="nav-item mr-4">
              <Link className="nav-link" to="/chat">
                Chat
              </Link>
            </li>
            <li className="nav-item mr-4">
              <Link className="nav-link" to="/matches">
                Matches
              </Link>
            </li>
            <li className="nav-item mr-4">
              <Link className="nav-link" to="/explore">    
                Explore
              </Link>
            </li>
            <li className="nav-item mr-4">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
              <li className="nav-item mr-4">
              <Link className="nav-link" to="/signup">
                Signup
              </Link>
            </li>
              <li className="nav-item mr-4">
              <Link className="nav-link" to="/guidelines">
                Community Guidelines
              </Link>
            </li>
          
            {/* <li className="nav-item">
              <Link className="nav-link" to="/" onClick={logout}>
                Log out {currentUser.first_name || currentUser.username}
              </Link>
            </li> */}
    //       </ul>
    //   );
    // }
    // export default Navbar */}