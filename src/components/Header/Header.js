import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import user1 from "../../images/profile-pic.png"
import auth from "../../firebase.init"
const Header = () => {

    const [user] = useAuthState(auth);
    console.log(user);

    const handleSignOut = () =>{
        signOut(auth);
    }
   
    return (
        <div>
        <div className="header">

       
        <div className="menu"><Link className="menu" to='/'>TourGuide</Link></div>
        
       <div className="nav mt-5 home-link mb-5">
        <div className="menu-list"><Link className="menu" to='/'>Home</Link></div> 
        <div className="menu-list"><Link className="menu" to='/Service'>Service</Link></div>
        <div className="menu-list"><Link className="menu" to='/blog'>Blog</Link></div>
        <div className="menu-list"><Link className="menu" to='/about'>About Me</Link></div>
        {
            user? <div className="menu-list w-20"> <span className="text-white">{user.displayName}  </span> <span><img src={user.photoURL}style ={{height:"60px", width:"60px", borderRadius:"20px"}}alt="user"></img></span><button className='btn btn-link text-white text-decoration-none ms-5 ' onClick={handleSignOut}>  sign out</button></div>  :
            <div className="menu-list"><Link className="menu" to='/login'>Login</Link></div>
        }
        
        </div>

        </div>
        </div>
    );
};

export default Header;