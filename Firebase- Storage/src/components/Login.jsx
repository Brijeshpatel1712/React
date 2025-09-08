import React, { useState } from "react";
import { auth, provider } from "../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth/cordova";
import GoogleButton from "react-google-button";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [user] = useAuthState(auth);

  function hendalsubmit(e) {
    e.preventDefault();
    window.location.href = "/Addproduct";
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
    localStorage.setItem("token", "true");
  }

  function hendallogin() {
  
    signInWithPopup(auth, provider, user)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        window.location.href = "/Addproduct";
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }

  return (
    <>
      <form onSubmit={hendalsubmit}>
        <input
          type="text"
          value={email}
          placeholder="enter your emil"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="text"
          value={password}
          placeholder="enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <input type="submit" value="Login" />
        <br />
        <GoogleButton onClick={hendallogin} />
      </form>
    </>
  );
};

export default Login;
