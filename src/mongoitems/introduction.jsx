import SideBar from "../sidebar"
import NavBar from "../navbar"
import pic1 from "../images/Screenshot (212).png";
import { useNavigate } from "react-router-dom";
export default function Intro(){
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
        <h2>Introduction to MongoDB</h2><br></br>
        You can create a MongoDB database in the following environments:<br></br><br></br>
        <ul>
            <li>MongoDB Atlas: The fully managed service for MongoDB deployments in the cloud</li><br></br>
            <li>MongoDB Enterprise: The subscription-based, self-managed version of MongoDB</li><br></br>
            <li>MongoDB Community: The source-available, free-to-use, and self-managed version of MongoDB</li><br></br>
        </ul>
        <h2>Document Database</h2><br></br>
        A record in MongoDB is a document, which is a data structure composed of field and value pairs. MongoDB documents are similar to JSON objects. The values of fields may include other documents, arrays, and arrays of documents.<br></br>
        <img src={pic1} alt="mongo-1" className="r-img-1"></img><br></br><br></br>
        <b>The advantages of using documents are:</b><br></br><br></br>
        <li>Documents correspond to native data types in many programming languages.</li><br></br>
        <li>Embedded documents and arrays reduce need for expensive joins.</li><br></br>
        <li>Dynamic schema supports fluent polymorphism.</li><br></br>
        <h4>Key Features</h4><br></br>
        <h6>High Performance</h6><br></br>
        MongoDB provides high performance data persistence. In particular,<br></br><br/>
        <li>Support for embedded data models reduces I/O activity on database system.</li><br/>
        <li>Indexes support faster queries and can include keys from embedded documents and arrays.</li><br/>
        <h6>High Availability</h6><br/>
        MongoDB's replication facility, called replica set, provides:<br/><br/>
        <li>automatic failover</li><br/>
        <li>data redundancy.</li><br/>
        <h6>Horizontal Scalability</h6><br/>
        MongoDB provides horizontal scalability as part of its core functionality:<br/><br/>
        <ul>
            <li>Sharding distributes data across a cluster of machines.</li><br/>
            <li>Starting in 3.4, MongoDB supports creating zones of data based on the shard key. In a balanced cluster, MongoDB directs reads and writes covered by a zone only to those shards inside the zone. See the Zones manual page for more information.</li>
        </ul>

        <div className="nxt-prev">
<h2 className="r-prev-but" ><b></b></h2>
<button className="r-next-but" onClick={()=>nav('/crud')}><b>Next </b></button>
</div>

    </div>
    </div>
    </div>
    )
}
