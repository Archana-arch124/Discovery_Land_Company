import React from 'react';
import logo from "/ReactP/discoverylandd/src/ASSETS/logo.png";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Bar from '../Menubar/menu';
import { useHistory } from "react-router-dom";

function Navbar() {
  const history = useHistory();

  const handleRoute1 = (e, path) => {
    e.preventDefault();
    history.push(path);
  }

  return (
    <div>
      <Router>
        <nav className="navbar" >
          <Bar className="navbar1" style={{ float: "right" }} />
          <ul> <img className="logo" src={logo} alt="logo"></img>
            <li><a href="#" className="cool-link" onClick={e => handleRoute1(e, "/about")}>AboutDLC</a></li>
            <li><a href="#" className="cool-link" onClick={e => handleRoute1(e, "/ourWorlds")}>OurWorlds</a></li>
            <li><a href="#" className="cool-link" onClick={e => handleRoute1(e, "/experiences")}>Experiences</a></li>
            <li><a href="#" className="cool-link" onClick={e => handleRoute1(e, "/gallery")}>Gallery</a></li>
            <li><a href="#" className="cool-link" onClick={e => handleRoute1(e, "/news")}> Press</a></li>
            <li><a href="#" className="cool-link" onClick={e => handleRoute1(e, "/contact")}>Contact</a></li>
          </ul>
        </nav>
      </Router>
    </div>
  )
}

export default Navbar;
