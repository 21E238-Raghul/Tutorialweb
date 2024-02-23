import SideBar from "../sidebar"
import NavBar from "../navbar"
import { useNavigate } from "react-router-dom";
import pic1 from "../images/Screenshot (208).png";
import pic2 from "../images/Screenshot (209).png";
import pic4 from "../images/Screenshot (211).png";


export default function Hatches(){
    const nav=useNavigate();
    return(
        <div className="fulll">
        <div className="navbar-con">
        <NavBar/>
        </div>
        <div className="flexing">
        <div className="sidebar-container">
        <SideBar/>
         </div>
         <div className="big-content">
        <h2>Escape Hatches</h2><br></br>
        <h5><i>Some of your components may need to control and synchronize with systems outside of React. For example, you might need to focus an input using the browser API, play and pause a video player implemented without React, or connect and listen to messages from a remote server. In this chapter, 
            you'll learn the escape hatches that let you “step outside” React and connect to external systems. Most of your application logic and data flow should not rely on these features.</i></h5><br></br>
            <h2>Referencing values with refs </h2><br></br>
            When you want a component to “remember” some information, but you don't want that information to trigger new renders, you can use a ref:<br></br>
            <img src={pic1} alt="react-1" className="r-img-1"></img><br></br><br></br>
            Like state, refs are retained by React between re-renders. However, setting state re-renders a component. Changing a ref does not! You can access the current value of that ref through the ref.current property.<br></br>
            <img src={pic2} alt="react-1" className="r-img-1"></img><br></br><br></br>
            A ref is like a secret pocket of your component that React doesn't track. For example, you can use refs to store timeout IDs, DOM elements, and other objects that don't impact the component's rendering output.<br></br><br></br>
            <h2>Manipulating the DOM with refs </h2><br></br>
            React automatically updates the DOM to match your render output, so your components won't often need to manipulate it. However, sometimes you might need access to the DOM elements managed by React—for example, to focus a node, scroll to it, or measure its size and position.
            There is no built-in way to do those things in React, so you will need a ref to the DOM node. For example, clicking the button will focus the input using a ref:<br></br><br></br>
            <img src={pic4} alt="react-1" className="r-img-1"></img><br></br>
            <div className="nxt-prev">
<button className="r-prev-but" onClick={()=>nav('/state')}><b>Previous</b></button>
</div>
        </div>
    </div>
   
    </div>
   
    
      

    )
}