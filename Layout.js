import React from "react";
import du2 from './image/Du2.jpg';
import du3 from './image/Du3.png';
import du5 from './image/Du5.jpg';
import { Outlet } from "react-router-dom";
import LayoutCss from './Layout.css'

function Layout(){
    return(
        <>
            <div className="mt-0" id="Main" style={{height:"10rem"}}>
                <div className=".bg-light.bg-gradient text-center">
                    <img src={du3} style={{height:"6rem" ,width:"9rem"}}></img>
                    <strong className="text-danger" 
                            style={{
                                    fontSize:"60px",
                                    fontFamily:"",
                                    padding:"10px",
                                    marginLeft:"10px",
                                    marginTop:"10px"
                            }}>
                            Darshan University

                            </strong>
                </div>
                <div>
                
                </div>
            </div>
            
        <Outlet/>
        </>
    )
}
export default Layout;