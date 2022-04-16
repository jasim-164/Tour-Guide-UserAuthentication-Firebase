import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
        <div>
        <Link to='/'>Home</Link>
        <Link to='/Service'>Service</Link>
        <Link to='/blog'>Blog</Link>
        <Link to='/about'>About Me</Link>
        </div>
        </div>
    );
};

export default Header;