import React from 'react';
import "./Login.css"
const Login = () => {
    return (
        <div>
        <h3>Please Login</h3>
      
        
        <form>
            <input type="email" placeholder='Your Email' />
            <br />
            <input type="password" name="" id="" placeholder='Password'/>
            <br />
            <input type="submit" value="Login" />
        </form>

        <div class="google">

            <div className="signin-google">

                <div className="line"></div>
                <div>
                <h4>or Sign-in with Google</h4>
                </div>
                <div className="line"></div>
            </div>

            <div style={{margin: '20px'}}>
            <button >Google Sign In</button>
            </div>

        </div>

            
        </div>
    );
};

export default Login;