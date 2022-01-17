import axios from "axios";
import { useParams } from "react-router";
import { useEffect,useState } from "react";
const View = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        username: "",
        website: "",
        phone: ""
    })
    const {name,email,username,website,phone} = user;
    const {id} = useParams();
    useEffect(()=>{
        loaduser(); 
    },[])

const loaduser = async () =>{
   const result = await axios.get(`http://localhost:3003/users/${id}`);
  setUser(result.data);
}

  return (
    <div className="container">
      <div className="card">
        <div className="box">
          <div className="content">
            <h2>{id}</h2>
            <h3> {name}</h3>
            <p>
            <b>email:</b> {email}
            </p>
            <p>
            <b>Web:</b> {website}
            </p>
            <p>
            <b>phone:</b> {phone}
            </p>
            <a href="#">{username}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
