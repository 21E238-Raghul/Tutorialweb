import SideBar from "../sidebar"
import NavBar from "../navbar"
import { useNavigate } from "react-router-dom";
import pic1 from "../images/Screenshot (213).png";
export default function Crud(){
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
        <h2>Insert Documents</h2><br/>  
        You can insert documents in MongoDB by using the following methods:<br/><br/>
        <ul>
            <li>Your programming language's driver.</li><br/>
            <li>The MongoDB Atlas UI.</li><br/>
            <li>MongoDB Compass.</li><br></br>
        </ul>
        <h4>Insert Documents in the MongoDB Atlas UI</h4><br/>
        To insert a document in the MongoDB Atlas UI, complete the following steps.
        <ul><br/>
            <li><b>Navigate to the collection</b></li><br/>
            <ol>
                <li>In the MongoDB Atlas UI, click Database in the sidebar.</li><br/>
                <li>For the database deployment to which you want to add documents, click Browse Collections.</li><br/>
                <li>In the left navigation pane, select the database.</li><br/>
                <li>In the left navigation pane, select the collection.</li><br/>
            </ol>
            <li><b>Add the documents</b></li><br/>
            <ol>
                <li>Click Insert Document.</li><br/>
                <li>Click the curly braces icon, which opens the JSON view.</li><br/>
                <li>Paste the document array into the text entry field. For example, the following entry creates four documents, each of which contain three field.</li><br/>
                <img src={pic1}></img><br/><br/>
            </ol>
            <li><b>Click Insert.</b></li><br/>
            MongoDB Atlas adds the documents to the collection.
        </ul><br/>
        <h4>Insert Methods</h4><br/>
        MongoDB provides the following methods for inserting documents into a collection:<br/><br/>
        <ul>
            <li>db.collection.insertOne()</li><br/>
            <li>db.collection.insertOne()</li>
        </ul>
        <h4>Additional Methods for Inserts</h4><br/>
        The following methods can also add new documents to a collection:<br/><br/>
        <ul>
            <div className="points"><div>
            <li>db.collection.updateOne() </li><br/>
            <li>db.collection.updateMany()</li><br/>
            <li>db.collection.findAndModify() </li>
            </div><div className="point-2">
            <li>db.collection.findOneAndUpdate() </li><br/>
            <li>db.collection.findOneAndReplace()</li><br/>
            <li>db.collection.bulkWrite().</li><br/>
            </div></div>
        </ul>
        <h2>Update Documents</h2><br/>
        You can update documents in MongoDB using the following methods:<br/>
        <div className="nxt-prev">
<button className="r-prev-but" onClick={()=>nav('/intro')}><b>Previous</b></button>
<button className="r-next-but" onClick={()=>nav('/state')}><b>Next </b></button>
</div>

        
    </div>
    </div>
    </div>
    )
}
