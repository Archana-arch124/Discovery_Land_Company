import React from 'react'
import logo1 from "../../ASSETS/newLogo.png";
import '../../components/Home/home.css';
export default class Contact extends React.Component {
  render() {
    return (
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
    );
  }
}