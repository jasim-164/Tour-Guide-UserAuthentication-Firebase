import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

import auth from "../../firebase.init"
const Header = () => {

    const [user] = useAuthState(auth);

    const handleSignOut = () =>{
        signOut(auth);
    }
    return (
        <div>
        <div className="header">

       
        <div className="menu"><Link className="menu" to='/'>TourGuide</Link></div>

       <div className="nav mt-3">
        <div className="menu-list"><Link className="menu" to='/'>Home</Link></div> 
        <div className="menu-list"><Link className="menu" to='/Service'>Service</Link></div>
        <div className="menu-list"><Link className="menu" to='/blog'>Blog</Link></div>
        <div className="menu-list"><Link className="menu" to='/about'>About Me</Link></div>
        {
            user? <div className=""><button className='btn btn-link text-white text-decoration-none pb-2' onClick={handleSignOut}>sign out</button></div>  :
            <div className="menu-list"><Link className="menu" to='/login'>Login</Link></div>
        }
        
        </div>

        </div>

        </div>
    );
};

export default Header;