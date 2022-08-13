import React, { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import noteContext from "../context/notes/noteContext";

function Navbar() {
  let location = useLocation();
  
  const Notes = useContext(noteContext);
  const { userdetails, getUsers } = Notes;
  const mycheck = ()=>{
    getUsers();
  }
  useEffect(() => {
    mycheck();
  //  console.log(userdetails);
    // eslint-disable-next-line
  }, []); 
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            iNotebook
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/about" ? "active" : ""
                  }`}
                  to="/about"
                >
                  About
                </Link>
              </li>
            </ul> 
            <form className="d-flex">
         { !localStorage.getItem('token') &&  <Link to='/login' className='btn btn-primary mx-2' role='button'>Login</Link>
                }
         { !localStorage.getItem('token') &&  <Link to='/signup' className='btn btn-primary mx-2' role='button'>SignUp</Link>}
              {localStorage.getItem('token') && <h5 className='text-white'>Hello {userdetails.name}</h5>}
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
