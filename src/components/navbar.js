import React from "react";
import {Outlet,Link}from "react-router-dom"
import logo from "../images/logo.png";


const Navbar =function(){
    return(
        <>
         <nav className="ui raised very padded segment">
        
         <div className="ui icon header ">
         <img src={logo}  alt={"a logo about company"}/>Xiaojin Li's Project
            </div>
      
            <button className="ui yellow inverted segment"  style={{marginLeft:"2em"}}><Link to='/'>Adventue Scuba Diving</Link></button>
          
            <div className="ui right floated header">
            <button className="ui button"><Link to='/'>Home</Link></button>
                <button className="ui button"><Link to='./geo'>Geolocation</Link></button>
                <button className="ui button"><Link to='./search'>Search Image</Link></button>
                <button className="ui button"><Link to='./form'>Contact Us</Link></button>
            </div>

        </nav>
        <Outlet /> 
 
   
    
  

        </>
    )
}
export default Navbar;