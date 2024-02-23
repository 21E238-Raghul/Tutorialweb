import SideBar from "../sidebar";
import NavBar from "../navbar";
import pic1 from "../images/Screenshot (188).png";
import pic2 from "../images/Screenshot (189).png";
import pic3 from "../images/Screenshot (190).png";
import pic4 from "../images/Screenshot (191).png";
import { useNavigate } from "react-router-dom";
import Breadcrumb from 'react-bootstrap/Breadcrumb';

export default function Component(){
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
      };
    
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
      <div className="breadcrumb">
        <Breadcrumb >
      <Breadcrumb.Item href="http://localhost:3000/">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="">
        Library
      </Breadcrumb.Item>
    </Breadcrumb></div><br/>
        
        <h2>Your First Component</h2><br></br>
        <h5><i>Components are one of the core concepts of React. They are the foundation upon which you build user interfaces (UI), which makes them the perfect place to start your React journey!</i></h5><br></br>
        React lets you combine your markup, CSS, and JavaScript into custom “components”, reusable UI elements for your app. 
         Under the hood, it still uses the same HTML tags like  article , h1, etc.<br></br><br></br>
         <h2>Defining a component </h2><br></br>
         Traditionally when creating web pages, web developers marked up their content and then added interaction by sprinkling on some JavaScript. This worked great when interaction was a nice-to-have on the web. Now it is expected for many sites and all apps.
             React puts interactivity first while still using the same technology: <b>a React component is a JavaScript function that you can sprinkle with markup.</b> 
         <img src={pic1} alt="react-1" className="r-img-1"></img><br></br><br></br><br></br>
            <h2>Step 1: Export the component </h2><br></br>
            The export default prefix is a standard JavaScript syntax (not specific to React). It lets you mark the main function in a file so that you can later import it from other files. 
            (More on importing in Importing and Exporting Components!)<br></br>
        <br></br><h2>Step 2: Define the function </h2><br></br>
        With function Profile() { } you define a JavaScript function with the name Profile.<br></br>
        <img src={pic4} alt="react-2" className="r-img-1"></img><br></br>
        <br></br><h2>Step 3: Add markup</h2><br></br>
        The component returns an img  tag with src and alt attributes. img  is written like HTML, but it is actually JavaScript under the hood! This syntax is called JSX, and it lets you embed markup inside JavaScript.
        Return statements can be written all on one line, as in this component:<br/>
        <img src={pic2} alt="react-3" className="r-img-1"></img><br></br>
        <br></br>But if your markup isn't all on the same line as the return keyword, you must wrap it in a pair of parentheses:
        <img src={pic3} alt="react-4" className="r-img-1"></img><br></br>
        <br></br><h2>Recap</h2><br></br>
        You've just gotten your first taste of React! Let's recap some key points.<br></br>
        <br></br><li>React lets you create components, reusable UI elements for your app.</li>
        <li>In a React app, every piece of UI is a component.</li>
        <li>React components are regular JavaScript functions </li>

        <div className="feedback-con">
            <button className="feedback-but">Feedback</button>
        </div>
        
        
        <button className="r-1-next-but" onClick={()=>nav('/intraction')}><b>Next </b></button>
        </div>
        </div>
       </div>
    )
}