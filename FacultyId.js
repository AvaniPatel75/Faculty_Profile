import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom/client';
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import FacultyIdCss from './FacultyId.css'
function FacultyId(){


    const [data,setdata]=useState({});
    const {id}=useParams();
    const navigate=useNavigate();

    useEffect(()=>{

        fetch('http://localhost:8000/faculty/'+id)
        .then(res=>{
            if(!res.ok){
                throw new Error("not found.....");

            }
            return res.json();
        })
        .then((data)=>{setdata(data)})
        .catch(error=>console.error("error.....",error));
        
    },[]);
    function DeleteOne(){
        fetch('http://localhost:8000/faculty/'+id,
            {
                method:'DELETE'
            }

        ).then(res=>{
            if(!res.ok){
                throw new Error('not found....');
            }
            navigate('/faculty');
        })
        .catch(error=>console.error("error...........",error));
    }
    return(

        <>

            <div className="d-flex m-3" style={{height:"100%", width:"100%"}}>
                <div className="row d-flex p-1 m-1"></div>
                <div className="col-2 " style={{height:"100%"}}>
               
                            <div>
                                <div className="row d-flex">
                                            <div className="card p-1 " style={{ width: "100%" ,height:"100%"}}>
                                            <img
                                            src={data.FacultyImage}
                                            className="card-img-top p-1 "
                                            alt={data.FacultyName}
                                            style={{ height: "20rem", objectFit: "cover" }}
                                            />
                                            <div className="card-body">
                                            <h5 className="card-title">{data.FacultyName}</h5>
                                            <p className="card-text p-2">
                                                
                                            </p>
                                            </div>
                                            <div className="text-center p-2">
                                                <Link to={'/faculty'} className="btn btn-lg btn-warning ms-4 mb-2 mt-0" id="back">
                                                    Back
                                                </Link>
                                                <button onClick={DeleteOne} className="btn btn-lg btn-danger ms-4 mb-2 mt-0" id="delete">DELETE</button>
                                            </div>
                                            </div>
                                </div>
                            </div>
                            
                        
                </div>
                <div className="col-1"></div>
                <div className="col-9 m-3" style={{height:"100%",width:"67rem"}}>
                    <strong className="text-danger m-4 ">
                        <h1> Profiles</h1>
                       
                    </strong>
                    <br/>
                    <div className="table-container" style={{width:"80%"}}>
                            <table cellPadding={10} >
                               <tbody>
                               <tr className="bg-transperant">
                                    <td>Designation</td>
                                    <td>:</td>
                                    <td>{data.FacultyDesignation}</td>
                                </tr>
                                <tr className="bg-transperant">
                                    <td>Experience</td>
                                    <td>:</td>
                                    <td>{data.FacultyExperience}</td>
                                </tr>
                                <tr className="bg-transperant">
                                    <td>Working Since</td>
                                    <td>:</td>
                                    <td>{data.FacultyWorkingSince}</td>
                                </tr>
                                <tr>
                                    <td colSpan={3}><Link className="btn btn-success btn-lg" to={`/faculty/edit/${data.id}`} id="edit">Edit</Link></td>
                                </tr>
                               </tbody>
                            </table>
                     </div>
                    <div className="row"></div>
                </div>
            </div>
        </>
    )
}
export default FacultyId;