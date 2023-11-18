import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Update = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState(0);
  const navigate = useNavigate();

  useEffect(()=>{
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
    setId(localStorage.getItem("id"));
  }, [])
  const handleUpdate = (e)=>{
    e.preventDefault();
    axios.put(`https://6557ba12bd4bcef8b6131aab.mockapi.io/Practice-Crud/${id}`,{
        name:name,email:email
    })
    .then(()=>{
        navigate('/read');
    })
  }

  return (
    <div>
      <div className="container bg-light p-4 my-5">
        <h1 className="text-center">Update</h1>
        <form>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            value={name}
              onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            value={email}
              onChange={(e) => setEmail(e.target.value)}
          />
        </div>
    
        <button
          type="submit"
          className="btn btn-primary me-4"
          onClick={handleUpdate}
        >
          Update
        </button>
        
        <Link to="/read">
        <button className="btn btn-secondary ">Back</button>
        </Link>
      </form>
      </div>
    </div>
  );
};

export default Update;
