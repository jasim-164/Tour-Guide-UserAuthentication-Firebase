import React from 'react';
import "./Footer.css"
const Footer = () => {
    const date= new Date();
    const year= new Date().getFullYear();
    return (
        <div>
       

        <div className="Footer text-center h-50 mt-5 bg-info"> 
        <h4>copyright @{year}</h4>
        </div>

         
        </div>
    );
};

export default Footer;