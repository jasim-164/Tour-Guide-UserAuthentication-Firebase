import React, { useState } from 'react';
import "./Login.css"
import auth from "../../firebase.init"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';




const Login = () => {
    const navigate = useNavigate()
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    let errorMessage ;
    if (error) {
        errorMessage =(
          <div>
            <p>Error: {error.message}</p>
          </div>
        );
      }
      if (loading) {
        return <p>Loading...</p>;
      }
      if (user) {
          navigate('/');
      }
//     const [email,setemail] = useState('');
//     const [password,setpassword] = useState('');
//   const handleEmail=(event)=>{
//       setemail(event.target.value);
//       console.log(event.target.value);
//   }
//   const handlePassword=(event)=>{
//       setpassword(event.target.value);
//       console.log(event.target.value);
//   }
//   const passwordSignIn=()=>{
//     createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       // Signed in 
//       const user = userCredential.user;
//       console.log(user);
//       // ...
//     })
//     .catch((error) => {
//         console.log(error);
//       // ..
//     });
//   }

    return (
        <div>
        <h3>Please Login</h3>
      
        
        <form>
            <input type="email"  placeholder='Your Email' required />
            <br />
            <input type="password" name="" id="" placeholder='Password' required/>
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
            <h4 className="bg-danger">{errorMessage}</h4>
            <button onClick={() => signInWithGoogle()}>Google Sign In</button>
            </div>

        </div>

            
        </div>
    );
};

export default Login;