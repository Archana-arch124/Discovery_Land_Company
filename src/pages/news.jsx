import React from 'react'
import logo1 from "../ASSETS/newLogo.png";
import '../components/Home/home.css';
import Sidebar from '../components/Menubar/Sidebar.jsx';
import '../components/Home/home.css';
import logo from "../ASSETS/logo.png";
import new3 from "../ASSETS/new3.jpg";
import Cursor from '../components/Cursor/cursorStyle.jsx';


export default class News extends React.Component {
  render() {
    return (
      <div className="Background">
        <Cursor />
        <img src="https://dxaurk9yhilm4.cloudfront.net/images/889/DJI_0161-copy_2cbd80a0345be3b5a0b7649a1a2d057f.jpg" alt="" style={{ marginLeft: "0px", height: "95vh", width: "99vw" }}></img>

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
              <div class="unforget">News</div>
              <div class="experience">and Press</div>
              <div class="scroll" style={{ "marginTop": "35px" }}>Scroll to explore</div>
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
              </div> </div>
            <p class="c-intro"></p>
            <div className="p" style={{ "fontSize": "45px", padding: "110px" }}>
              <div>Latest News </div>

            </div>
          </div>
        </div>
        <img src={new3} alt="track" style={{ height: "90vh", width: "100vw", marginLeft: "0px", padding: "100px", marginTop: "-120px" }} />


        <footer>
          <div className="footer">
            <div className="logo1" >
              <img src={logo1} alt="logo1"></img>
            </div>
            <div className="footerInfo">
              <h6></h6>
              <nav className="footerNav">
                <div class="inTouch">
                  <ul>
                    <li><a href="#" style={{ color: 'grey' }}><b>GET IN TOUCH</b></a></li>
                    <li><a href="#" className="cool-link">(480)624-5200</a></li>
                    <li><a href="#" className="cool-link"><u>mail@discoverylandco.com</u></a></li>
                  </ul>
                </div>
                <div className="company">
                  <ul>
                    <li><a href="#" className="cool-link">About DLC</a></li>
                    <li><a href="#" className="cool-link">Our Worlds</a></li>
                    <li><a href="#" className="cool-link">Experiences</a></li>
                    <li><a href="#" className="cool-link">Gallery</a></li>
                    <li><a href="#" className="cool-link">Press</a></li>
                    <li><a href="#" className="cool-link">Contact</a></li>
                  </ul>
                </div>
                <div className="company" >
                  <ul className="company1" >
                    <li><a href="#" className="cool-link" >Magazine</a></li>
                    <li><a href="#" className="cool-link">Careers</a></li>
                    <li><a href="#" className="cool-link">Foundation</a></li>
                    <li><a href="#" className="cool-link">Company</a></li>
                    <li><a href="#" className="cool-link">Privacy</a></li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>

          <div className="last">
            <p>© Discovery Land Company. All rights reserved.</p>
          </div>

        </footer>
      </div>


    );
  }
}

