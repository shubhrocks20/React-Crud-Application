import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, Link} from 'react-router-dom';



const Create = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const header = { "Access-Control-Allow-Origin": "*" };

  const handleSubmit = (e) =>{
    e.preventDefault();

    axios.post('https://6557ba12bd4bcef8b6131aab.mockapi.io/Practice-Crud',{
      'name':name, 'email':email
    },
    header
    )
    .then(()=>{
      navigate('/read');
    });
  }
  return (
    <div className='container bg-light my-4'>
      {/* <h1 className='text-center'>Create</h1> */}
      <div className="d-flex justify-content-between my-4 items-center p-4">

        <h1 className="text-center text-bold">Create</h1>
        <Link to="/read">
        <button className="btn btn-primary ">Show Records</button>
        </Link>
        </div>
      <form action="">
        <label htmlFor="name" className='form-label'>Name</label>
        <input type="text" className='form-control' name="name" id="name" onChange={(e)=>setName(e.target.value)}/>
        <label htmlFor="email" className='form-label my-4'>Email</label>
        <input type="email" className='form-control' name="email" id="email" onChange={(e)=>setEmail(e.target.value)}/>
        <button type='button' className='btn btn-primary my-4' onClick={handleSubmit}>Submit</button>
      </form>

    </div>
  )
}

export default Create