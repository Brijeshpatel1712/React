import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import React from "react";
import GoogleButton from "react-google-button";
import { auth, provider } from "../Firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import '../App'; // Import your CSS here

const Login = () => {
  const [user] = useAuthState(auth);
  console.log(user);

  function handleClick() {
    signInWithPopup(auth, provider)
      .then((result) => { 
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
      })
      .catch((error) => { 
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Welcome Back</h2>
        <p className="login-subtitle">Sign in with Google to continue</p>
        <GoogleButton onClick={handleClick} />
      </div>
    </div>
  );
};

export default Login;
