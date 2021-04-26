import './home.css';
import track from '/ReactP/discoverylandd/src/ASSETS/tracking.jpg';
import new1 from "/ReactP/discoverylandd/src/ASSETS/new1.jpg";
import new2 from "/ReactP/discoverylandd/src/ASSETS/new2.jpg";
import water from "/ReactP/discoverylandd/src/ASSETS/water.jpg";
import video from "/ReactP/discoverylandd/src/ASSETS/video.mp4";
import wellness from "/ReactP/discoverylandd/src/ASSETS/wellness.jpg";
import new3 from "/ReactP/discoverylandd/src/ASSETS/new3.jpg";
import Contact from '../Footer/footer.jsx';
import React, { useRef } from "react";
import Cursor from '../Cursor/cursorStyle.jsx';
import Navbar from '../Navbar/navbar.jsx';



const Home = () => {
  const welcome = useRef(null);
  const gotoWelcome = () => window.scrollTo({
    top: welcome.current.offsetTop,
    behavior: "smooth"
  });


  return (
    <>

      <div className="Background">
        <Cursor />
        <section className="video-container">
          <video autoPlay loop className="video-background" muted plays-inline >
            <source src={video} type="video/mp4" />
          </video>
        </section>
        <div className="App" id="outer-container">
          <div id="page-wrap">
            <header className="Head" >
              <div className="logo" >

                <Navbar />

              </div>
            </header>
            <div className="unforgettableExperience animate__slideInUp">
              <div className="unforget" >Discover</div>
              <div className="experience">your world</div>
              <div className="scroll">Scroll to explore</div>
              <div className="arrow" onClick={gotoWelcome}>
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="exclusiveCard">
        <div className="exclusiveWrapper" >
          <div className="exclusiveInfo" ref={welcome} >
            <h>Welcome to </h><h className="ourworld"> our world</h>
            <div className="paragraph">
              <p id="longDevice"></p>
              <div className="p">
                <div className="p1">Discover the unique atmosphere of our private</div>
                <div className="p2">residential club communities.Once experienced.</div>
                <div className="p3">This classic,comfortable,modern living in </div>
                <div className="p4"> nature's most spectacular settings woeldwide.</div>
                <div className="p5">Reassuringly exclusive.Generously welcoming.Find</div>
                <div className="p6"> your unique world-a place where families love to be;</div>
                <div className="p7">creating unforgettable moments,together.</div>
              </div>
            </div>
            <figure className="waterImage" >
              <img src={water} className="waterImage11" alt="waterImage" />
            </figure>
            <figure className="waterImage1">
              <img src={new1} className="waterImage12" alt="new1" />
            </figure>
          </div>
        </div>
        <div className="explore">
          <h>Explore </h><br /><h className="ourworld">our worlds</h>
          <div className='explore1'>From majestic mountainscapes to beautiful coastlines... breathtaking worlds to uncover and experience. </div>
        </div><figure className="waterImageslide">
          <img src={track} className="waterImageslide1" alt="track" />
          <img src={new2} className="waterImageslide2" alt="new2" />
          <img src={new1} className="waterImageslide3" alt="new1" />
        </figure>
        <hr></hr>
        <div className="lands" >
          <h>Lands of</h><br></br><h className="ourworld"> Discovery</h>
          <div className='explorelands'>A world away from the day-to-day. Your escape. Your haven. Your world. Explore the map below and take a journey to our communities </div>
        </div>
        <ul className="landsofdiscovery">
          <li><a href className="landsofdiscovery1"><u>North America & Caribbean</u></a></li>
          <li><a href="#" className="link" >Hawaii</a></li>
          <li><a href="#" className="link1">Europe</a></li>
        </ul>
        <div className="Gallery">
          <img src={new3} alt="track" className="Gallery1" />
          <img src={water} alt="water" className="Gallery2" />
          <img src={wellness} alt="wellness" className="Gallery3" /></div>
        <div className="footerData" >
          <Contact />
        </div>
      </div>
    </>
  );
}
export default Home;