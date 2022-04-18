import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
        <div className="header">

        <div className="menu">TourGuide</div>

       <div className="nav">
        <div className="menu-list"><Link className="menu" to='/'>Home</Link></div> 
        <div className="menu-list"><Link className="menu" to='/Service'>Service</Link></div>
        <div className="menu-list"><Link className="menu" to='/blog'>Blog</Link></div>
        <div className="menu-list"><Link className="menu" to='/about'>About Me</Link></div>
        </div>

        </div>

        </div>
    );
};

export default Header;