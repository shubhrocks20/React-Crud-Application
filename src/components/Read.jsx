import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState([]);
  
  const [isDark, setIsDark] = useState(''); 

  const getData = () => {
    axios
      .get("https://6557ba12bd4bcef8b6131aab.mockapi.io/Practice-Crud")
      .then((res) => {
        setData(res.data);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`https://6557ba12bd4bcef8b6131aab.mockapi.io/Practice-Crud/${id}`)
      .then(() => {
        getData();
      });
  };

  const handleTheme = () =>{
    if(isDark === 'table-dark'){
        setIsDark('');

    }
    else setIsDark('table-dark');
  }
  const setToLocalStorage = (id, name, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="container bg-light my-4 p-4">
        <div class="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckChecked"
            onChange={handleTheme}
            
          />
         
        </div>
        <div className="d-flex justify-content-between p-4">
          <h1 className="text-center text-bold">Read</h1>
          <Link to="/">
            <button className="btn btn-primary ">Add More Row</button>
          </Link>
        </div>

        <table className={`table my-5 border border-danger ${isDark}`}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          {data.map((each) => {
            return (
              <tbody>
                <tr>
                  <th scope="row">{each.id}</th>
                  <td>{each.name}</td>
                  <td>{each.email}</td>
                  <td>
                    <button
                      className="btn btn-danger "
                      onClick={() => handleDelete(each.id)}
                    >
                      Delete
                    </button>
                  </td>
                  <td>
                    <Link to="/update">
                      <button
                        className="btn btn-info"
                        onClick={() =>
                          setToLocalStorage(each.id, each.name, each.email)
                        }
                      >
                        Edit
                      </button>
                    </Link>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Read;
