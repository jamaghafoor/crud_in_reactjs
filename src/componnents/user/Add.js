import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function Add() {
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    username: "",
    website: "",
  });
  const { name, email, username, website } = user;

  const inputHandle = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submitHandle = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3003/users", user);
    history.push("/");
  };

  return (
    <div className="container" style={{ width: "30%", margin: "40px auto" }}>
      <div className="row">
        <div className="col-sm-12 col-sm-offset-2 well">
          <div className="col-sm-12 form-legend">
            <h2>Add user</h2>
          </div>
          <div className="col-sm-12 form-column">
            <form onSubmit={(e) => submitHandle(e)}>
              <div className="form-group">
                <label htmlFor="email">Name</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  className="form-control"
                  onChange={(e) => inputHandle(e)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email-confirm">Email</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  className="form-control"
                  onChange={(e) => inputHandle(e)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="country">Username</label>
                <input
                  type="text"
                  name="username"
                  value={username}
                  className="form-control"
                  onChange={(e) => inputHandle(e)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="zip-code">Website</label>
                <input
                  type="text"
                  name="website"
                  value={website}
                  className="form-control"
                  onChange={(e) => inputHandle(e)}
                />
              </div>
              <button className="btn btn-primary">Add user</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Add;
