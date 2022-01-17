import axios from "axios";
import { useState, useEffect } from "react";
import {Link} from 'react-router-dom';

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadusers();
  }, []);

  const loadusers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    setUsers(result.data.reverse());
  };

const deleteHandle = async (id) =>{
await axios.delete(`http://localhost:3003/users/${id}`);
loadusers();
}

  return (
    <div className="container" style={{ marginTop: "40px" }}>
      <h1>Home Page</h1>
      <table className="table align-middle">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">UserName</th>
            <th scope="col">Website</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user,index) => (
            <tr key={index}>
              <th scope="row">{index+1}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>{user.website}</td>
              <td>
                <Link  to={`/user/view/${user.id}`}> <button type="button" className="btn btn-primary btn-sm px-3">
                  <i className="fas fa-eye"></i>
                </button></Link>
               <Link  to={`/user/update/${user.id}`}> <button
                  type="button"
                  className="btn btn-warning btn-sm px-3 m-1"
                >
                  <i className="fas fa-edit" style={{color: '#fff'}}></i>
                </button></Link>
                <button type="button" className="btn btn-danger btn-sm px-3" onClick={()=>deleteHandle(user.id)}>
                  <i className="fas fa-times"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
