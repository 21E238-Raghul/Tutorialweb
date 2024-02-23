import SideBar from "../sidebar"
import NavBar from "../navbar"
import pic1 from "../images/Screenshot (219).png";
import pic2 from "../images/Screenshot (220).png";
import pic3 from "../images/Screenshot (222).png";
import pic4 from "../images/Screenshot (223).png";
import { useNavigate } from "react-router-dom";
export default function Http(){

    
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
        <h2>HTTP</h2><br></br>
        <h5><i>To use the HTTP server and client one must require('node:http').</i></h5><br/>
        The HTTP interfaces in Node.js are designed to support many features of the protocol which have been traditionally difficult to use.
         In particular, large, possibly chunk-encoded, messages. The interface is careful to never buffer entire requests or responses, so the user is able to stream data.<br/><br/>
        HTTP message headers are represented by an object like this:<br/><br/>
        <img src={pic1} alt="react-1" className="r-img-1"></img><br/><br/>
        <b>Keys are lowercased. Values are not modified.</b><br/><br/>
        In order to support the full spectrum of possible HTTP applications, the Node.js HTTP API is very low-level. It deals with stream handling and message parsing only.
         It parses a message into headers and body but it does not parse the actual headers or the body.<br/><br/>
         The raw headers as they were received are retained in the rawHeaders property, which is an array of [key, value, key2, value2, ...].
          For example, <b>the previous message header object might have a rawHeaders list like the following:</b><br/><br/>
        <img src={pic2} alt="react-1" className="r-img-1"></img><br/><br/>
        <h2>Class: http.Agent</h2><br/>
        An Agent is responsible for managing connection persistence and reuse for HTTP clients. It maintains a queue of pending requests for a given host and port, 
        reusing a single socket connection for each until the queue is empty,at which time the socket is either destroyed or put into a pool where it is kept to be 
        used again for requests to the same host and port. Whether it is destroyed or pooled depends on the keepAlive. <br/><br/>
        Pooled connections have TCP Keep-Alive enabled for them, but servers may still close idle connections, in which case they will be removed from the pool and a new connection will be made when a new HTTP request is made for that host and port.
         Servers may also refuse to allow multiple requests over the same connection, in which case the connection will have to be remade for every request and cannot be pooled.
          The Agent will still make the requests to that server, but each one will occur over a new connection.<br/><br/>
          When a connection is closed by the client or the server, it is removed from the pool. Any unused sockets in the pool 
          will be unrefed so as not to keep the Node.js process running when there are no outstanding requests.<br/><br/>
          It is good practice, to destroy() an Agent instance when it is no longer in use, because unused sockets consume OS resources.<br/><br/>
          Sockets are removed from an agent when the socket emits either a 'close' event or an 'agentRemove' event. When intending to keep one HTTP request open for a long time without keeping it in the agent, something like the following may be done:<br/><br/>
          <img src={pic3} alt="react-1" className="r-img-1"></img><br/><br/>
          An agent may also be used for an individual request. By providing agent: false as an option to the http.get() or http.request() functions, a one-time use Agent with default options will be used for the client connection.<br/><br/>
          agent:false:<br/><br/>
          <img src={pic4} alt="react-1" className="r-img-1"></img>
        </div>
        </div>
        </div>
    )}