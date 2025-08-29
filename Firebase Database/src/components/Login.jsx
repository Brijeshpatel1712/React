import React, { useState } from "react";
import { auth } from "../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth/cordova";
import GoogleButton from "react-google-button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function hendalsubmit(e) {
    e.preventDefault();
   alert("Login Successfully");
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res);
    
      })
      .catch((err) => console.log(err));
    localStorage.setItem("token", "true");
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
       
      </form>
    </>
  );
};

export default Login;
