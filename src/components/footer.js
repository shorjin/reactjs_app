import React from 'react';
import {Outlet,Link}from "react-router-dom"
const Footer=function(props){
    return(
        <div className='footer'>
            <div className="footer-content">
            <p>&copy; 2023 Project1 by Xiaojin Li. All Rights Reserved.</p>
            <div className="footericon">
            <Link to="https://twitter.com/" className="ui twitter circular icon button" target="_blank">
                <i aria-hidden="true" className="twitter icon"></i>
            </Link>
            <Link to="https://www.linkedin.com/" className="ui linkedin circular icon button" target="_blank">
                <i aria-hidden="true" className="linkedin icon"></i>
            </Link>
            <Link to="https://www.facebook.com/" className="ui facebook circular icon button" target="_blank">
                <i aria-hidden="true" className="facebook icon"></i>
            </Link>
        </div>
        </div>
        <Outlet />
    </div>
            )}
  
  export default Footer;