import React, { useState } from "react";
import ReactDOM from 'react-dom/client';
import { useNavigate } from "react-router-dom";
import AddCss from './AddFaculty.css'
function AddFaculty(){

    const [data,setdata]=useState({});
    const navigate=useNavigate();
    const handleSubmit = async () => {
        try {
            const response = await fetch('http://localhost:8000/faculty/add', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                // Navigate to the faculty page after successful submission
                navigate('/faculty');
            } else {
                const errorData = await response.json();
                console.error('Error submitting faculty:', errorData);
            }
        } catch (error) {
            console.error('Network error:', error);
        }
    };

    return(
        <>
        <h1 className="text-dark">Add Data Here</h1>

        <form style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', backgroundColor: 'palegoldenrod', borderRadius: '10px', boxShadow: '0 0 10px rgba(0,0,0,1.1)' }}>
                    <input type="text" placeholder="Name" onChange={(e)=>{
                        setdata({...data,FacultyName:e.target.value})
                    }}
                    style={{ width: '100%', padding: '10px', margin: '10px 0', borderRadius: '5px', border: '1px solid black' }}/>
                    <input type="text" placeholder="ID" onChange={(e)=>{
                        setdata({...data,id:e.target.value})
                    }}
                    style={{ width: '100%', padding: '10px', margin: '10px 0', borderRadius: '5px', border: '1px solid black' }}
                    />
                    <input type="text" placeholder="Designation" onChange={(e)=>{
                        setdata({...data,FacultyDesignation:e.target.value})
                    }}
                    style={{ width: '100%', padding: '10px', margin: '10px 0', borderRadius: '5px', border: '1px solid black' }}
                    />
                    <input type="text" placeholder="Qualification" onChange={(e)=>{
                        setdata({...data,FacultyEducationQualificatio:e.target.value})
                    }}
                    style={{ width: '100%', padding: '10px', margin: '10px 0', borderRadius: '5px', border: '1px solid black' }}
                    />
                   
                   <input type="text"  placeholder="Experience" onChange={(e)=>{
                        setdata({...data,FacultyExperience:e.target.value})
                    }}
                    style={{ width: '100%', padding: '10px', margin: '10px 0', borderRadius: '5px', border: '1px solid black', resize: 'vertical' }}
                    />
                     <input type="text"  placeholder="Working Since" onChange={(e)=>{
                        setdata({...data,FacultyWorkingSince:e.target.value})
                    }}
                    style={{ width: '100%', padding: '10px', margin: '10px 0', borderRadius: '5px', border: '1px solid black', resize: 'vertical' }}
                    />
                    <input type="textarea"  placeholder="Upload Image" onChange={(e)=>{
                        setdata({...data,FacultyImage:e.target.value})
                    }}
                    style={{ width: '100%', padding: '10px', margin: '10px 0', borderRadius: '5px', border: '1px solid black', resize: 'vertical' }}
                    />

             </form>
           
            
            <div className="text-center">
                    <button 
                    className="text-center"
                    type="submit"  style={{ padding: '10px 15px', backgroundColor: '#1976d2', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', marginTop: '10px', transition: 'background-color 0.3s', alignSelf:'center', alignContent:'center'}} 
                    onMouseOver={(e) => e.target.style.backgroundColor = '#1565c0'} 
                    onMouseOut={(e) => e.target.style.backgroundColor = '#1976d2'}
                    onClick={handleSubmit}>
                        Submit
                    </button>
            </div>
           
        </>
    )
}
export default AddFaculty;