import SideBar from "../sidebar"
import NavBar from "../navbar"
import { useNavigate } from "react-router-dom";
export default function Indexes(){
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

			<h2>Indexes</h2><br/>
			Indexes support efficient execution of queries in MongoDB. Without indexes, MongoDB must scan every document in a collection to return query results.
				 If an appropriate index exists for a query, MongoDB uses the index to limit the number of documents it must scan.<br/><br/>

				 Although indexes improve query performance, adding an index has negative performance impact for write operations.
				  For collections with a high write-to-read ratio, indexes are expensive because each insert must also update any indexes.<br/><br/>

				  <h3>Use Cases</h3><br/>
				  If your application is repeatedly running queries on the same fields, you can create an index on those fields to improve performance. For example, consider the following scenarios:<br/><br/>

				  <table className="table-h">
					<thead>
						<th>Scenario</th>
						<th className="tab-1">Index Type</th>
					</thead><hr/>
					<tbody>
						<td className="table">A human resources department often needs to look up employees by employee ID. You can create an index on the employee ID field to improve query performance.</td>
						<td className="tab-2">Single Field Index</td>
					</tbody><hr/>
					<tbody>
						<td>A salesperson often needs to look up client information by location. Location is stored in an embedded object with fields like state, city, and zipcode. You can create an index on the entire location object to improve performance for queries on any field in that object.</td>
						<td className="tab-2">Single Field Index on an object</td>
					</tbody><hr/>
					<tbody>
						<td>A grocery store manager often needs to look up inventory items by name and quantity to determine which items are low stock. You can create a single index on both the item and quantity fields to improve query performance.</td>
						<td className="tab-2">Compound Index</td>
					</tbody>
				</table><br/>

				<h3>Create an Index</h3><br/>
				Indexes support efficient execution of queries in MongoDB. If your application is repeatedly running queries on the same fields, you can create an index on those fields to improve performance for those queries.<br/><br/>
				To create an index, use the createIndex() shell method or equivalent method for your driver. This page shows examples for the MongoDB Shell and drivers.<br/><br/>
				<h3>Procedure</h3><br/>
				To create an index using the Node.JS driver, use createIndex().
				
		 	</div>
		</div>
	</div>
)}