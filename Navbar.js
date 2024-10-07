import React from "react";
import ReactDOM from 'react-dom/client';
import { Link } from "react-router-dom";
import Layout from "./Layout";
import NavbarCss from './Navbar.css'
function Navbar(){

    return(
        <>
        
       <div>
        
       <nav className="navbar navbar-expand-lg navbar-light .bg-light.bg-gradient text-dark" id="navbar">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Home</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/faculty">Faculty</Link>
                    </li>
                    <li className="nav-item">
                    <Link className='nav-link activey' to={'/faculty/add'}>Add Faculty</Link>
                    </li>
                    
                </ul>
                </div>
            </div>
        </nav> 
        
        </div> 
        <Layout/>
        </>
    )
}
export default Navbar;