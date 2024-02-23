import SideBar from "../sidebar"
import NavBar from "../navbar"
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        borderRadius: "50%",
        right: "-10px",
        backgroundColor:"black"
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        borderRadius: "50%",
        left: "-15px",
        backgroundColor:"black"
      }}
      onClick={onClick}
    />
  );
}


export default class CustomArrows extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      
    };
    

    
    return (
        <>
         <div className="fulll">
        <div className="navbar-con">
        <NavBar/>
        </div>
        <div className="flexing">
        <div className="sidebar-container">
        <SideBar/>
         </div>
         <div className="big-content">
    
      <h1>Reference videos</h1>
      <h4>React</h4>
      <div className="container"  >
        <Slider  {...settings}>
        <div>
          <iframe  style={{ width: "100%",height:'40vh' ,margin:'20px',borderRadius:'55px',padding:'10px'}} src="https://www.youtube.com/embed/4ORZ1GmjaMc?si=fEiDo9V76CkJxS2D" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>

          <div>
          <iframe  style={{ width: "100%",height:'40vh' ,margin:'20px',borderRadius:'55px',padding:'10px'}} src="https://www.youtube.com/embed/4ORZ1GmjaMc?si=fEiDo9V76CkJxS2D" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>

          <div>
          <iframe  style={{ width: "100%",height:'40vh' ,margin:'20px',borderRadius:'55px',padding:'10px'}} src="https://www.youtube.com/embed/4ORZ1GmjaMc?si=fEiDo9V76CkJxS2D" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>

          <div>
          <iframe  style={{ width: "100%",height:'40vh' ,margin:'20px',borderRadius:'55px',padding:'10px'}} src="https://www.youtube.com/embed/4ORZ1GmjaMc?si=fEiDo9V76CkJxS2D" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>

          <div>
          <iframe  style={{ width: "100%",height:'40vh' ,margin:'20px',borderRadius:'55px',padding:'10px'}} src="https://www.youtube.com/embed/4ORZ1GmjaMc?si=fEiDo9V76CkJxS2D" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>

          <div>
          <iframe  style={{ width: "100%",height:'40vh' ,margin:'20px',borderRadius:'55px',padding:'10px'}} src="https://www.youtube.com/embed/4ORZ1GmjaMc?si=fEiDo9V76CkJxS2D" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </Slider>
      </div>

<div className="mongo-vid">
       <h4>MongoDB </h4>
      <div className="container"  >
        <Slider  {...settings}>
        <div>
          <iframe  style={{ width: "100%",height:'40vh' ,margin:'20px',borderRadius:'55px',padding:'10px'}} src="https://www.youtube.com/embed/gDOKSgqM-bQ?si=XZQOj1Hq1E_QGc5t" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>

          <div>
          <iframe style={{ width: "100%",height:'40vh' ,margin:'20px',borderRadius:'55px',padding:'10px'}} src="https://www.youtube.com/embed/gDOKSgqM-bQ?si=XZQOj1Hq1E_QGc5t" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>

          <div>
          <iframe style={{ width: "100%",height:'40vh' ,margin:'20px',borderRadius:'55px',padding:'10px'}} src="https://www.youtube.com/embed/gDOKSgqM-bQ?si=XZQOj1Hq1E_QGc5t" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>

          <div>
          <iframe style={{ width: "100%",height:'40vh' ,margin:'20px',borderRadius:'55px',padding:'10px'}} src="https://www.youtube.com/embed/gDOKSgqM-bQ?si=XZQOj1Hq1E_QGc5t" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>

          <div>
          <iframe style={{ width: "100%",height:'40vh' ,margin:'20px',borderRadius:'55px',padding:'10px'}} src="https://www.youtube.com/embed/gDOKSgqM-bQ?si=XZQOj1Hq1E_QGc5t" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>          </div>

          <div>
          <iframe style={{ width: "100%",height:'40vh' ,margin:'20px',borderRadius:'55px',padding:'10px'}} src="https://www.youtube.com/embed/gDOKSgqM-bQ?si=XZQOj1Hq1E_QGc5t" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>          </div>
        </Slider>

      </div>
      </div>

      <div className="mongo-vid">
       <h4>Node</h4>
      <div className="container"  >
        <Slider  {...settings}>
        <div>
        <iframe style={{ width: "100%",height:'40vh' ,margin:'20px',borderRadius:'55px',padding:'10px'}} src="https://www.youtube.com/embed/zb3Qk8SG5Ms?si=LRP30j9mFADDDnMW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>          </div>

          <div>
          <iframe style={{ width: "100%",height:'40vh' ,margin:'20px',borderRadius:'55px',padding:'10px'}} src="https://www.youtube.com/embed/zb3Qk8SG5Ms?si=LRP30j9mFADDDnMW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>          </div>

          <div>
          <iframe style={{ width: "100%",height:'40vh' ,margin:'20px',borderRadius:'55px',padding:'10px'}} src="https://www.youtube.com/embed/zb3Qk8SG5Ms?si=LRP30j9mFADDDnMW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>

          <div>
          <iframe style={{ width: "100%",height:'40vh' ,margin:'20px',borderRadius:'55px',padding:'10px'}} src="https://www.youtube.com/embed/zb3Qk8SG5Ms?si=LRP30j9mFADDDnMW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>          </div>

          <div>
          <iframe style={{ width: "100%",height:'40vh' ,margin:'20px',borderRadius:'55px',padding:'10px'}} src="https://www.youtube.com/embed/zb3Qk8SG5Ms?si=LRP30j9mFADDDnMW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>          </div>

          <div>
          <iframe style={{ width: "100%",height:'40vh' ,margin:'20px',borderRadius:'55px',padding:'10px'}} src="https://www.youtube.com/embed/zb3Qk8SG5Ms?si=LRP30j9mFADDDnMW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>          </div>
        </Slider>

      </div>
      </div>
 

      </div>
      </div>
      </div>
           
      </>)


    
}}