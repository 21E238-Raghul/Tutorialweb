import { useState,useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios";

function Users(){

    const[users,setUsers]=useState([])

    useEffect(()=>{
        axios.get('http://127.0.0.1:3001')
        .then(result=>setUsers(result.data))
        .catch(err=>console.log(err))
        },[])
        

    return(
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
<div className="w-50 bg-white rounded p-3">
    <Link to="/login" className='btn btn-success'>Add</Link>
            <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Designation</th>
                    <th>Email</th>
                    <th>Password</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user)=>{
                        return<tr>
                        <td>{user.name}</td>
                        <td>{user.designation}</td>
                        <td>{user.email}</td>
                        <td>{user.password}</td>
                        <td><button className="btn btn-success">Update</button><button className="btn btn-danger">Delete</button></td>
                        </tr>
                    })
                }
            </tbody>
            </table>
        </div></div>
    )
}
export default Users;