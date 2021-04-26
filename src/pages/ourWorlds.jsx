import React from 'react';
import Sidebar from '../components/Menubar/Sidebar.jsx';
import '../components/Home/home.css';
import logo from "../ASSETS/logo.png";
import track from "../ASSETS/tracking.jpg";
import treeWater from "../ASSETS/treeWater.jpg";
import new2 from "../ASSETS/new2.jpg";
import water from "../ASSETS/water.jpg";
import wellness from "../ASSETS/wellness.jpg";
import new3 from "../ASSETS/new3.jpg";
import Contact from '../components/Footer/footer.jsx';
import Cursor from '../components/Cursor/cursorStyle.jsx';

const OurWorlds= () => {


  return (

    <div className="Background">
      <Cursor />
      <img src="https://dxaurk9yhilm4.cloudfront.net/images/7383/jael-rodriguez-AkF5NT0sZy8-unsplash-1-1_210301_200939_35d31212c7a2d4dccdff99afa3f88af5.jpg" alt="" style={{ marginLeft: "0px", height: "95vh", width: "99vw" }}></img>

      <div className="App" id="outer-container">
        <div id="page-wrap">
          <header style={{ marginTop: "-241px" }} >
            <Sidebar />
            <div className="logo" >
              <nav className="navbar" >
                <ul> <img className="logo" src={logo} alt="logo"></img>
                  <li><a href="#" className="cool-link">AboutDLC</a></li>
                  <li><a href="#" className="cool-link">OurWorlds</a></li>
                  <li><a href="#" className="cool-link" >Experiences </a></li>
                  <li><a href="#" className="cool-link" >Gallery</a></li>
                  <li><a href="#" className="cool-link">Press</a></li>
                  <li><a href="#" className="cool-link">Contact </a></li>
                  <li><a href="#" className="cool-link"> ☰ </a></li>

                </ul>
              </nav>
            </div>
          </header>
          <div class="unforgettableExperience animate__slideInUp">
            <div class="unforget"></div>
            <div class="scroll" style={{ "marginTop": "31px" }}>Scroll to explore</div>
            <div className="arrow" >
                <svg className="arrowdown"
                  color="white"
                  width="34"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.0001 3.67157L13.0001 3.67157L13.0001 16.4999L16.2426 13.2574L17.6568 14.6716L12 20.3284L6.34314 14.6716L7.75735 13.2574L11.0001 16.5001L11.0001 3.67157Z"
                    fill="currentColor"
                  />
                </svg>
              </div></div>

          <div className="Gallery">
            <img src={new3} alt="track" style={{ height: "300px", width: "400px", marginLeft: "0px", marginTop: "-120px" }} />
            <img src={water} alt="water" style={{ height: "300px", width: "400px", marginLeft: "0px", marginTop: "-562px" }} />
            <img src={wellness} alt="wellness" style={{ height: "300px", width: "425px", marginLeft: "0px", marginTop: "-566px" }} /></div>
          <div className="Gallery">
            <img src={new2} alt="track" style={{ height: "300px", width: "400px", marginLeft: "0px", marginTop: "48px" }} />
            <img src={track} alt="water" style={{ height: "300px", width: "400px", marginLeft: "0px", marginTop: "-562px" }} />
            <img src={treeWater} alt="wellness" style={{ height: "300px", width: "425px", marginLeft: "0px", marginTop: "-566px" }} /></div>
        </div>
        <Contact />
      </div>
    </div>
  )
}


export default OurWorlds;