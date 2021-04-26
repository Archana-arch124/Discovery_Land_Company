import React from 'react'
import logo1 from "../ASSETS/newLogo.png";
import '../components/Home/home.css';
import Sidebar from '../components/Menubar/Sidebar.jsx';
import '../components/Home/home.css';
import logo from "../ASSETS/logo.png";
import new3 from "../ASSETS/new3.jpg";
import arrow from "../ASSETS/arrow.jpg";
import Cursor from '../components/Cursor/cursorStyle.jsx';
export default class ToolBarContact extends React.Component {
  render() {
    return (
      <div className="Background">
        <Cursor />
        <img src="https://dxaurk9yhilm4.cloudfront.net/images/810/contacthero_7103947f36acbeba23c6868ee5ad2c23.jpg" alt="" style={{ marginLeft: "0px", height: "95vh", width: "99vw" }}></img>
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
              <div class="unforget">Find your</div>
              <div class="experience">Own World</div>
              <div class="scroll" style={{ "marginTop": "35px" }}>Scroll to explore</div>
              <img src={arrow} alt="arrow"
                style={{ "marginLeft": "850px", "marginTop": "39px", "transform": "translate3d(4px, -116px, 2px)", "height": "60px", "width": "67px" }}></img>
            </div>
            <p class="c-intro"></p>
            <div className="p" style={{ "textAlign": "center", "fontSize": "25px", "fontStyle": "oblique", padding: "110px" }}>
              <div>Take the first step towards discovering your perfect world. Select a </div>
              <div>community below and speak to one of our advisors who are here to </div>
              <div>make the incredible happen. </div>
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

