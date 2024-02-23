import SideBar from "../sidebar"
import NavBar from "../navbar"
import { useNavigate } from "react-router-dom";
export default function Install(){

    
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
            <h2>Installing</h2><br/>
            Assuming you've already installed Node.js, create a directory to hold your application, and make that your working directory.<br/><br/>
            <div className="style-box">
            $ mkdir myapp<br/>
            $ cd myapp
            </div><br/>
            Use the npm init command to create a package.json file for your application. <br/><br/>
            <div className="style-box">
            $ npm init
            </div><br/>
            This command prompts you for a number of things, such as the name and version of your application. For now, you can simply hit RETURN to accept the defaults for most of them, with the following exception:<br/><br/>
            <div className="style-box">
            entry point: (index.js)
            </div><br/>
            Enter app.js, or whatever you want the name of the main file to be. If you want it to be index.js, hit RETURN to accept the suggested default file name.<br/><br/>
            Now install Express in the myapp directory and save it in the dependencies list. For example:<br/><br/>
            <div className="style-box">
            $ npm install express
            </div><br/>
            To install Express temporarily and not add it to the dependencies list:<br/><br/>
            <div className="style-box">
            $ npm install express --no-save
            </div><br/>
        </div>
        </div>
        </div>
    )}