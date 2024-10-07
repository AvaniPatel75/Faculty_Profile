import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom/client';
import { Link } from "react-router-dom";
import FacultyCss from './Faculty.css';
function Faculty(){

    const [data,setdata]=useState([]);
    const URL='http://localhost:8000/faculty';
    useEffect(()=>{

        fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setdata(data);
      })
      .catch((error) => console.error("Error fetching data: ", error));
    },[]);



    return(

        <>
            <div className="container mt-4">
                <h1 className="text-center text-dark border border-3 border-secondary box-shadow-bottom mt-4" id="header">Faculty</h1>
                
                <div className="row">
                    {data.length > 0 ? (
                    data.map((e, index) => (
                        <div className="col-lg-2 col-md-6 col-sm-12 mb-4 p-1" key={index}>
                            <div className="card p-1 border border-rounded-1" style={{ width: "100%" }}>
                                <img
                                src={e.FacultyImage}
                                className="card-img-top"
                                alt={e.FacultyName}
                                style={{ height: "15rem", objectFit: "cover" }}
                                />
                                <div className="card-body">
                                <h5 className="card-title">{e.FacultyName}</h5>
                                <p className="card-text p-2">
                                    <strong>Designation: </strong> {e.FacultyDesignation}
                                    <br />
                                    <strong>Experience: </strong> {e.FacultyExperience}
                                    <br />
                                    <strong>Working Since: </strong> {e.FacultyWorkingSince}
                                    <br/>
                                </p>
                                </div>
                                <div className="text-center p-2">
                                    <Link to={`/faculty/${e.id}`} className="btn btn-primary border border-rounded-2">
                                        View Profile
                                    </Link>
                            </div>
                            </div>
                            
                        </div>
                    ))
                    ) : (
                    <p>No faculty data available</p>
                    )}
                </div>
                </div>
        
        </>

    );
}
export default Faculty;
