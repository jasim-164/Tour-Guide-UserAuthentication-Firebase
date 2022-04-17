import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
        <div className="header">

        <div>TourGuide</div>

       <div className="nav">
        <div className="menu"><Link to='/'>Home</Link></div> 
        <div className="menu"><Link to='/Service'>Service</Link></div>
        <div className="menu"><Link to='/blog'>Blog</Link></div>
        <div className="menu"><Link to='/about'>About Me</Link></div>
        </div>

        </div>

        </div>
    );
};

export default Header;