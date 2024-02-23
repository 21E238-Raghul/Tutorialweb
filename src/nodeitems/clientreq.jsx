import SideBar from "../sidebar"
import NavBar from "../navbar"
import { useNavigate } from "react-router-dom";
export default function Clientreq(){

    
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
            <h2>Class: http.ClientRequest</h2><br/>
            <h5><i>This object is created internally and returned from http.request().</i></h5><br/>
             It represents an in-progress request whose header has already been queued. The header is still mutable using the setHeader(name, value),
             getHeader(name), removeHeader(name) API. The actual header will be sent along with the first data chunk or when calling request.end().<br/><br/>
             To get the response, add a listener for 'response' to the request object. 'response' will be emitted from the request object when the response headers have been received. 
             The 'response' event is executed with one argument which is an instance of http.IncomingMessage.<br/><br/>
             During the 'response' event, one can add listeners to the response object; particularly to listen for the 'data' event.<br/><br/>
             If no 'response' handler is added, then the response will be entirely discarded. However, if a 'response' event handler is added, 
             then the data from the response object must be consumed, either by calling response.read() whenever there is a 'readable' event, or by adding a 'data' handler, or by calling the .resume() method. Until the data is consumed, the 'end' event will not fire.
              Also, until the data is read it will consume memory that can eventually lead to a 'process out of memory' error.<br/><br/>
              <h3>Event: 'abort'</h3><br/>
              Emitted when the request has been aborted by the client. This event is only emitted on the first call to abort().<br/><br/>
            <h3>Event: 'close'</h3><br/>
            Indicates that the request is completed, or its underlying connection was terminated prematurely (before the response completion).<br/><br/>
            <h3>Event: 'connect'</h3>
            <ul>
                <li>response </li>
                <li>socket </li>
                <li>head</li>
            </ul>
            Emitted each time a server responds to a request with a CONNECT method. If this event is not being listened for, clients receiving a CONNECT method will have their connections closed.<br/><br/>
            <h3>Event: 'continue'</h3><br/>
            Emitted when the server sends a '100 Continue' HTTP response, usually because the request contained 'Expect: 100-continue'. This is an instruction that the client should send the request body.<br/><br/>
            <h3>Event: 'finish'</h3><br/>
            Emitted when the request has been sent. More specifically, this event is emitted when the last segment of the response headers and body have been handed off to the operating system for transmission over the network. It does not imply that the server has received anything yet.<br/><br/>
                <h2>Class: http.Server</h2>
                <h3>Event: 'checkContinue'</h3>
                <ul>
                    <li>request</li>
                    <li>response</li>
                </ul>
                Emitted each time a request with an HTTP Expect: 100-continue is received. If this event is not listened for, the server will automatically respond with a 100 Continue as appropriate.<br/><br/>
                Handling this event involves calling response.writeContinue() if the client should continue to send the request body, or generating an appropriate HTTP response (e.g. 400 Bad Request) if the client should not continue to send the request body.<br/><br/>
                When this event is emitted and handled, the 'request' event will not be emitted.<br/><br/>
                Emitted each time a request with an HTTP Expect header is received, where the value is not 100-continue. If this event is not listened for, the server will automatically respond with a 417 Expectation Failed as appropriate.<br/><br/>
                <h2>Event: 'connection'</h2><br/>
                This event is emitted when a new TCP stream is established. socket is typically an object of type net.Socket. Usually users will not want to access this event. In particular, the socket will not emit 'readable' events because of how the protocol parser attaches to the socket. The socket can also be accessed at request.socket.<br/><br/>
                This event can also be explicitly emitted by users to inject connections into the HTTP server. In that case, any Duplex stream can be passed.<br/><br/>
                If socket.setTimeout() is called here, the timeout will be replaced with server.keepAliveTimeout when the socket has served a request (if server.keepAliveTimeout is non-zero).



        </div>
        </div>
        </div>
    )}