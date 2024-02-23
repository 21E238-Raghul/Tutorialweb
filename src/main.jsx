import pic1 from "./images/logo-pro.jpg";
import vid1 from "./images/pexels_videos_1350205 (1080p).mp4";
import vid2 from "./images/Untitled design.mp4";
import rlogo from "./images/logo512.png";
import pic2 from "./images/Screenshot (214).png";
import pic3 from "./images/exp-logo-removebg-preview.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react"; 
import Breadcrumb from 'react-bootstrap/Breadcrumb';
    
    const Main = () => {
      // const {dis}=props
        const nav=useNavigate();


        const [showImage, setShowImage] = useState(false);
        
          useEffect(() => {
            setShowImage(true);
          }, []);

        useEffect(() => {
          const handleScroll = () => {
            const scrollY = window.scrollY;
      
            if (scrollY > 100) {
              document.getElementById('animatedElement').classList.add('animate');
            } else {
              document.getElementById('animatedElement').classList.remove('animate');
            }
          };
          window.addEventListener('scroll', handleScroll);
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
        }, []);

        const [scaleDirection, setScaleDirection] = useState('scaleDown');

        useEffect(() => {
          const handleScroll = () => {
            const scrollTop = window.scrollY;
            const triggerPosition = window.innerHeight * 1.2; 
      
            if (scrollTop > triggerPosition && scaleDirection === 'scaleDown') {
              setScaleDirection('scaleUp');
            } else if (scrollTop <= triggerPosition && scaleDirection === 'scaleUp') {
              setScaleDirection('scaleDown');
            }
          };
      
          window.addEventListener('scroll', handleScroll);
      
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
        }, [scaleDirection]);


        // const [isVisible, setIsVisible] = useState(false);

        // useEffect(() => {
        //   setIsVisible(true);
        // }, []);
      
        // const textSpring = useSpring({
        //   opacity: isVisible ? 1 : 0,
        //   transform: isVisible ? 'translateX(0%)' : 'translateX(100%)',
        //   from: { opacity: 0, transform: 'translateX(100%)' },
        // });
      
        // const letters = dis.split('');
      
        // const lettersSpring = useSpring({
        //   from: { opacity: 0, transform: 'translateY(20px)' },
        //   to: { opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0px)' : 'translateY(20px)' },
        //   config: { duration: 200, delay: (index) => index * 50 },
        // });

        const details=[{
          title:"Free trial",
          price:"$0",
          description:"1 month free trial "
        },{
          title:"6 month",
          price:"$99",
          description:"Get exclusive video and programming contents instantly to upgrade your skills."
        },{
          title:"12 month",
          price:"$149",
          description:"Get exclusive video and programming contents instantly to upgrade your skills. "
        }]

        const learners=[{
          feedback:"I am proud to say that after a few months of taking this course...I passed my exam and am now an AWS Certified Cloud Practitioner! This content was exactly what the CCP exam covered.",
          name:"Raghul"
        },{
          feedback:"I am proud to say that after a few months of taking this course...I passed my exam and am now an AWS Certified Cloud Practitioner! This content was exactly what the CCP exam covered.",
          name:"Sriram"
        },{
          feedback:"I am proud to say that after a few months of taking this course...I passed my exam and am now an AWS Certified Cloud Practitioner! This content was exactly what the CCP exam covered.",
          name:"Ajay"
        },{
          feedback:"I am proud to say that after a few months of taking this course...I passed my exam and am now an AWS Certified Cloud Practitioner! This content was exactly what the CCP exam covered.",
          name:"Vikash"
        }]

        

        
        
    return(
        <div className="full">    
        <nav className="top-con fixed-top" >
          <div>
            <h4 className="heading">Tutorial Spot</h4>
            </div>
            <div className="login-icon">
            <h4><i onClick={()=>nav('/login')} class="fas fa-sign-in-alt"></i></h4>
            </div>
        </nav>

        <div className="main-first">
        <img className="img" src={pic1}></img>
        <h2 className="quote"><b>Empower yourself through knowledge<br/> Learn, practice, master.</b></h2>
        <h3 className="quote">Start Today.</h3>
        <h4 className="quote"><p className="explore-home" onClick={()=>nav('/component')}>Explore ></p></h4>
        </div>
        <div id="animatedElement" className="animated-content">
        <div className="main-second" onClick={()=>nav('/component')}>
            <h2 className="quote-1">Join in our Crew</h2>
            <h2 className="quote-2">Start your Journey</h2>
            <video className="vid" autoPlay loop muted playsInline>
                <source src={vid1} type="video/mp4"></source>
            </video>
        </div>
</div>
<div className={`scale-animation ${scaleDirection}`}>
    <div className="two-part"  onClick={()=>nav('/component')}>
        <div className="react-logo">
            <img className="rotate" src={rlogo}></img>
        </div>
        <div className="react-content">
            <h2>React is a declarative, efficient, and flexible JavaScript library for building user interfaces.<br/><br/>It makes painless to create interactive UIs</h2>
        </div>
    </div>
</div>
    <div className="main-third" id="container1">
      <div className="mongo-content" onClick={()=>nav('/intro')}>
        <h2 className="quote-3">Built for the way you work with data<br/>Ready to start building?<br/><br/><br/>Create your first database today.    <i class="fas fa-server"></i></h2>
      </div>
        <div className="mongo-logo">
          <img src={pic2}></img>
        </div>
    </div>

    <div className="main-four">
      <div className="node-con">
      <h2 className="quote-4">Node.js is a platform built on Chrome's V8 JavaScript engine for easily building fast and scalable network applications.</h2>
      <div className="node-vid">
    <video  autoPlay   muted playsInline>
        <source  src={vid2} type="video/mp4"></source>
    </video>
    <h4 className="node-learn"><a href="" onClick={()=>nav('/http')}>Learn more ></a></h4>
    </div>
    </div>
    <div className="express-con">
      <h2 className="exp-con">Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features to develop web and mobile applications.</h2>
      <img className="ex-img" src={pic3}></img>
      <h4 ><a href="" onClick={()=>nav('/install')} className="exp-learn">Learn more ></a></h4>
    </div>

    
    </div>
    <h1 className="offer-head" ><b>Special Offers</b></h1>

    <div className="full-adv">
      {details.map((users)=>(
    <div class="card">
      <div class="content">
        <div class="title">{users.title}</div>
        <div class="price">{users.price}</div>
        <div class="description">{users.description}</div>
      </div>
        <button className="button1">
          Subscribe
        </button>
  </div>
  ))}
    </div>
    <div className="learners-con">
        <h3 className="report-con">How learners like you are achieving their goals.</h3>

        
    <div className="container1">
    {learners.map((users)=>(
  <div class="card1">

    <div className="learners-details">
    <div className="wid">
  <i class="fas fa-quote-right colan"></i></div>
  <div>
    <h5 className="feed-txt">{users.feedback}</h5><br/>
  </div><hr></hr>
  <div>
    <h4 className="name-txt"> <i class="fas fa-user-circle pro-circle"></i>{users.name}</h4>
  </div>
  </div>
  </div>
    ))}</div>
    </div>
    <div className="instructor-con">
    <div className="instructor">
      <img className="ins-image" src="https://s.udemycdn.com/home/non-student-cta/instructor-1x-v3.jpg"></img>
    </div>
    <div className="ins-content">
      <h2 className="ins-txt">Become an instructor</h2><br/>
      <h6 className="ins-txt1">Instructors from around the world teach millions of learners on Udemy. We provide the tools and skills to teach what you love.</h6>
      <button>Start teaching today</button>
    </div>
    </div>
    <hr></hr>
    </div>
    )
}
export default Main;
