import SideBar from "../sidebar";
import NavBar from "../navbar";
import { useNavigate } from "react-router-dom";
import pic1 from "../images/Screenshot (192).png";
import pic2 from "../images/Screenshot (193).png";
import pic3 from "../images/Screenshot (194).png";
import pic4 from "../images/Screenshot (195).png";
export default function Intraction(){
    const nav=useNavigate();
    return (
        <div className="fulll">
        <div className="navbar-con">
        <NavBar/>
        </div>
        <div className="flexing">
        <div className="sidebar-container">
        <SideBar/>
         </div>
         <div className="big-content">
        <h2>Adding Interactivity</h2><br></br>
        <h5><i>Some things on the screen update in response to user input. For example, clicking an image gallery switches the active image. In React, data that changes over time is called state. You can add state to any component, and update it as needed. In this chapter,
             you'll learn how to write components that handle interactions, update their state, and display different output over time.</i></h5><br></br>
        <h2>Responding to events</h2><br></br>
        React lets you add event handlers to your JSX. Event handlers are your own functions that will be triggered in response to user interactions like clicking, hovering, focusing on form inputs, and so on.<br></br><br></br>

Built-in components like  only support built-in browser events like onClick. However, you can also create your own components, and give their event handler props any application-specific names that you like.<br></br>
<br></br><img src={pic1} alt="react-1" className="r-img-1"></img>
<br></br><h2>State: a component's memory </h2><br></br>
Components often need to change what's on the screen as a result of an interaction. Typing into the form should update the input field, clicking “next” on an image carousel should change which image is displayed, clicking “buy” puts a product in the shopping cart.
 Components need to “remember” things: the current input value, the current image, the shopping cart. In React, this kind of component-specific memory is called state.<br></br>
 <br></br>You can add state to a component with a useState Hook. Hooks are special functions that let your components use React features (state is one of those features). 
 The useState Hook lets you declare a state variable. It takes the initial state and returns a pair of values: the current state, and a state setter function that lets you update it.
<img src={pic2} alt="react-2" className="r-img-1"></img><br></br>
<br></br><h2>Responding to Events</h2><br></br>
React lets you add event handlers to your JSX. Event handlers are your own functions that will be triggered in response to interactions like clicking, hovering, focusing form inputs, and so on.<br></br>
      <br></br><h2>Adding event handlers </h2><br></br>
      To add an event handler, you will first define a function and then pass it as a prop to the appropriate JSX tag. For example, here is a button that doesn't do anything yet:<br></br>
      <br></br><img src={pic3} alt="react-3" className="r-img-1"></img><br></br>
      <br></br>You can make it show a message when a user clicks by following these three steps:<br></br>
      <img src={pic4} alt="react-4" className="r-img-1"></img><br></br>
      <br></br><h2>Recap</h2><br></br>
      <li>Treat all state in React as immutable.</li>
<li>When you store objects in state, mutating them will not trigger renders and will change the state in previous render “snapshots”.</li>
<li>Instead of mutating an object, create a new version of it, and trigger a re-render by setting state to it.</li>

<li>Spread syntax is shallow: it only copies one level deep.</li>
<li>To update a nested object, you need to create copies all the way up from the place you're updating.</li>
<li>To reduce repetitive copying code, use Immer.</li><br></br>
<div className="nxt-prev">
<button className="r-prev-but" onClick={()=>nav('/component')}><b>Previous</b></button>
<button className="r-next-but" onClick={()=>nav('/state')}><b>Next </b></button>
</div>

    </div>
        </div></div>
  
    )
}