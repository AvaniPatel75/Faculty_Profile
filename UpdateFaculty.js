import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom/client';
import { useNavigate, useParams } from "react-router-dom";

function UpdateFaculty(){


    const {id}=useParams();
    const navigate=useNavigate();
    const [data,setdata]=useState({});
    const URL="http://localhost:8000/faculty/";

    useEffect(() => {
        fetch(URL + id, {
            method: "GET"
        })
            .then(res => res.json())
            .then(res => setdata(res))
            .catch(error => console.error('Error fetching data:', error));
    }, [id]);

    const handleSubmit= async(event)=>{
        event.preventDefault(); 
        console.log(URL)
        try {
            const response = await fetch("http://localhost:8000/faculty/edit/"+id, {
                method: "PUT",
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
        } 
        catch (error) {
            console.error('Network error:', error);
        }
    }
    return(

        <>

            <h1 className="text-dark">Edit Data Here</h1>

            <form style={{ 
                            maxWidth: '400px',
                            margin: '0 auto',
                            padding: '20px', 
                            backgroundColor: 'palegoldenrod', 
                            borderRadius: '10px', 
                            boxShadow: '0 0 10px rgba(0,0,0,1.1)' 
                        }}>
                        <input type="text"  value={data.FacultyName || ''} onChange={(e)=>{
                            setdata({...data,FacultyName:e.target.value})
                        }}
                        style={{ 
                                    width: '100%', 
                                    padding: '10px', 
                                    margin: '10px 0', 
                                    borderRadius: '5px', 
                                    border: '1px solid black' 
                                }}/>
                        <input type="text"  value={data.id || ''} onChange={(e)=>{
                            setdata({...data,id:e.target.value})
                        }}
                        style={{ 
                                    width: '100%', 
                                    padding: '10px', 
                                    margin: '10px 0', 
                                    borderRadius: '5px', 
                                    border: '1px solid black' 
                                }}
                        />
                        <input type="text"  value={data.FacultyDesignation || ''} onChange={(e)=>{
                            setdata({...data,FacultyDesignation:e.target.value})
                        }}
                        style={{ 
                                    width: '100%', 
                                    padding: '10px', 
                                    margin: '10px 0', 
                                    borderRadius: '5px', 
                                    border: '1px solid black' 
                                }}
                        />
                        <input type="text"  value={data.FacultyEducationQualification || ''} onChange={(e)=>{
                            setdata({...data,FacultyEducationQualification:e.target.value})
                        }}
                        style={{ 
                                    width: '100%', 
                                    padding: '10px', 
                                    margin: '10px 0', 
                                    borderRadius: '5px', 
                                    border: '1px solid black' 
                                }}
                        />
                    
                    <input type="text"  value={data.FacultyExperience || ''} onChange={(e)=>{
                            setdata({...data,FacultyExperience:e.target.value})
                        }}
                        style={{ 
                                    width: '100%', 
                                    padding: '10px', 
                                    margin: '10px 0', 
                                    borderRadius: '5px', 
                                    border: '1px solid black', 
                                    resize: 'vertical' 
                                }}
                        />
                        <input type="text"  value={data.FacultyWorkingSince || ''} onChange={(e)=>{
                            setdata({...data,FacultyWorkingSince:e.target.value})
                        }}
                        style={{ 
                                    width: '100%', 
                                    padding: '10px', 
                                    margin: '10px 0', 
                                    borderRadius: '5px', 
                                    border: '1px solid black', 
                                    resize: 'vertical'
                                }}
                        />
                        <input type="textarea" value={data.FacultyImage ||''} onChange={(e)=>{
                            setdata({...data,FacultyImage:e.target.value})
                        }}
                        style={{ 
                                    width: '100%', 
                                    padding: '10px', 
                                    margin: '10px 0', 
                                    borderRadius: '5px', 
                                    border: '1px solid black', 
                                    resize: 'vertical' 
                                }}
                        />

                <div className="text-center">
                        <button 
                        className="text-center"
                        type="submit" 
                        style={{ 
                                padding: '10px 15px', 
                                backgroundColor: '#1976d2', 
                                color: 'white', 
                                border: 'none', 
                                borderRadius: '5px', 
                                cursor: 'pointer', 
                                marginTop: '10px', 
                                transition: 'background-color 0.3s', 
                                alignSelf:'center', 
                                alignContent:'center'
                            }} 
                        onMouseOver={(e) => e.target.style.backgroundColor = '#1565c0'} 
                        onMouseOut={(e) => e.target.style.backgroundColor = '#1976d2'}
                        onClick={handleSubmit}>
                            Submit
                        </button>
                </div>
            

                </form>
            
                
                
                    
        </>
    )
}
export default UpdateFaculty;