import NavBar from "./navbar"
import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
export default function Contact(){
    const nav=useNavigate();

    const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const [isVisibletop, setIsVisibletop] = useState(false);

  useEffect(() => {
    setIsVisibletop(true);
  }, []);


    return (
        <div className="fulll">
       <div className="navbar-con">
       <NavBar/>
       </div>
       <div className="main-contact">
       <div className={`fade-in-from-bottom ${isVisible ? 'visible' : ''}`}>
        <div className="white-bar">
        
        </div></div>
        <div className="name-con">
        <div className={`fade-in-from-top ${isVisibletop ? 'visible' : ''}`}>
            
            <div>
            <h4>Contact Us </h4>
            </div><br/>
            <div className="full-contact">
            <div>
            <h5><i class="fas fa-phone-alt"></i> </h5>
            </div>
            <div className="contact-info">
                <h5>9360301109</h5>
            </div>
        </div>
            <div className="mail-box">
            <div className="contact-logo">
            <h5><i class="fas fa-mail-bulk"></i></h5>
            </div>
            <div className="mail-info" >
                <a className="contact-link" href="https://fontawesome.com/v5/icons/twitter?f=brands&s=solid"><h5>717821e238@kce.ac.in</h5></a>
            </div></div>
            <div className="mail-box">
            <div className="contact-logo">
            <h5><i class="fab fa-twitter"></i></h5>
            </div>
            <div className="mail-info">
            <a className="contact-link" href="https://fontawesome.com/v5/icons/twitter?f=brands&s=solid"><h5>ts@twitter.com</h5></a>
            </div></div>
            <div className="mail-box">
            <div className="contact-logo">
            <h5><i class="fab fa-linkedin-in"></i></h5>
            </div>
            <div className="mail-info">
            <a className="contact-link" href="https://www.linkedin.com/in/raghul-s-a64816256"><h5>linkedin</h5></a>
            </div></div>
            <div className="mail-box">
            <div className="contact-logo">
            <h5><i class="fab fa-instagram"></i></h5>
            </div>
            <div className="mail-info">
            <a className="contact-link" href="https://fontawesome.com/v5/icons/twitter?f=brands&s=solid"><h5>instagram.com/tspot-re</h5></a>
            </div></div>
            <div className="mail-box">
            <div className="contact-logo">
            <h5><i class="fab fa-github"></i></h5>
            </div>
            <div className="mail-info">
            <a className="contact-link" href="https://fontawesome.com/v5/icons/twitter?f=brands&s=solid"><h5>github.com/tutospot3</h5></a>
            </div></div>
            
        </div>
        </div>
        <div className="contact-quote">
        <h4>About Us</h4>
        <h3><i>Invest in yourself.<br/> Your career is the engine of your wealth.</i></h3>
       </div>
       </div>

       </div>
    )}