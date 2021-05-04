import React from 'react'
import '../components/Home/home.css';
import new3 from "../ASSETS/new3.jpg";
import Cursor from '../components/Cursor/cursorStyle.jsx';
import Contact from '../components/Footer/footer';
import Navbar from '../components/Navbar/navbar';


export default class News extends React.Component {
  render() {
    return (
      <div className="Background">
        <Cursor />
        <img src="https://dxaurk9yhilm4.cloudfront.net/images/889/DJI_0161-copy_2cbd80a0345be3b5a0b7649a1a2d057f.jpg" alt="" style={{ marginLeft: "0px", height: "95vh", width: "99vw" }}></img>

        <div className="App" id="outer-container">
          <div id="page-wrap">
          <header style={{ marginRight: "200px", marginTop: "-351px" }} >
            <Navbar />
          </header>
            <div class="unforgettableExperience animate__slideInUp">
              <div class="unforget">News</div>
              <div class="experience">and Press</div>
              <div class="scroll" style={{ "marginTop": "145px" }}>Scroll to explore</div>
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
            <div className="p" style={{ "fontSize": "25px", padding: "200px" }}>
              <b>Latest News </b>
<p>Discovery Land Company is a Scottsdale, Arizona-based developer and operator of private residential communities and clubs in North America. The company has been called one of the best developers of resort communities by Robb Report Vacation Homes and Luxury Living magazines. </p>
            </div>
          </div>
        </div>
        <img src={new3} alt="track" style={{ height: "99vh", width: "99vw", marginLeft: "0px", padding: "100px", marginTop: "-120px" }} />


        <Contact/>
      </div>


    );
  }
}

