import SideBar from "../sidebar"
import NavBar from "../navbar"
import { useNavigate } from "react-router-dom";
import pic1 from "../images/Screenshot (224).png";
import pic2 from "../images/Screenshot (225).png";
import pic3 from "../images/Screenshot (226).png";
import pic4 from "../images/Screenshot (227).png";
export default function Basicroute(){

    
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
            <h2>Basic routing</h2><br/>
            Routing refers to determining how an application responds to a client request to a particular endpoint,
            which is a URI (or path) and a specific HTTP request method (GET, POST, and so on).<br/><br/>
            Each route can have one or more handler functions, which are executed when the route is matched.<br/><br/>
            Route definition takes the following structure:<br/><br/>
            <div className="style-box">
            app.METHOD(PATH, HANDLER)
            </div><br/>
            Where:
            <ul>
                <li>app is an instance of express.</li>
                <li>METHOD is an HTTP request method, in lowercase.</li>
                <li>PATH is a path on the server.</li>
                <li>HANDLER is the function executed when the route is matched.</li>
            </ul><br/>
            The following examples illustrate defining simple routes.<br/><br/>
            Respond with Hello World! on the homepage:<br/>
                 <img src={pic1} alt="react-2" className="r-img-1"></img><br/><br/>
                 Respond to POST request on the root route (/), the application's home page:<br/>
                 <img src={pic2} alt="react-2" className="r-img-1"></img><br/><br/>
                 Respond to a PUT request to the /user route:<br/>
                 <img src={pic3} alt="react-2" className="r-img-1"></img><br/><br/>
                 Respond to a DELETE request to the /user route:<br/>
                 <img src={pic4} alt="react-2" className="r-img-1"></img>

        </div>
        </div>
        </div>
    )}