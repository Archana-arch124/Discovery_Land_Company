import Sidebar from '../components/Menubar/Sidebar.jsx';
import '../components/Home/home.css';
import logo from "../ASSETS/logo.png";
import video from "../ASSETS/video.mp4";
import Contact from '../components/Footer/footer.jsx';
import Cursor from '../components/Cursor/cursorStyle.jsx';
import Navbar from '../components/Navbar/navbar.jsx';

const Experience = () => {
  return (
    <div className="Background">
      <Cursor />
      <section className="video-container">
        <video autoPlay loop className="video-background" muted plays-inline style={{ width: "100%" }}>
          <source src={video} type="video/mp4" />
        </video>
      </section>
      <div className="App" id="outer-container">
        <div id="page-wrap">
          <header style={{ marginRight: "200px", marginTop: "-471px" }} >
            <Navbar />
          </header>
          
          <div class="unforgettableExperience animate__slideInUp">
            <div class="unforget" style={{ marginRight: "250px", marginTop: "-151px" }}>Gallery</div>
            <div class="scroll" style={{ "marginTop": "240px" }}>Scroll to explore</div>
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
        </div>
      </div>
      <Contact />
    </div>

  );
}
export default Experience;