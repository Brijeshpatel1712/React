import React, { useState } from "react";

const From = () => {
  const object ={
    name:"",
    password:"",
    Email:"",
    number:"",
    gender:"",
  };

  const [obj, setobj] = useState(object);

  function hendalsubmit(e) {
    e.preventDefault();
    console.log(obj);
    e.target.reset();

    const arr = JSON.parse(localStorage.getItem("object")) || [];

    const updeted = [...arr, obj];

    localStorage.setItem("object", JSON.stringify(updeted));
  }

  function hendalcheng(e) {
    setobj({ ...obj, [e.target.name]: e.target.value });
  }

  return (
    <>
      <h1>Login Form</h1>

      <form onSubmit={hendalsubmit}>

        <p>Username </p>
        <input type="text" placeholder="Enter your name" name="name" onChange={(e) =>{hendalcheng(e)}}/>

        <p>Pasword</p>
        <input type="text" placeholder="Enter your name" name="password"onChange={(e) =>{hendalcheng(e)}}/>

        <p>Email </p>
        <input type="Email" placeholder="Enter your Email" name="Email" onChange={(e) => {hendalcheng(e)}}/>

        <p>Number </p>
        <input type="number" placeholder="Enter your number" name="number" onChange={(e) =>{hendalcheng(e)}}/>

        <p>Gender</p>
        <input type="radio" value={"male"} name="gender" onChange={(e)=>{hendalcheng(e)}}/> male 
        <input type="radio" value={"female"} name="gender" onChange={(e)=>{hendalcheng(e)}}/>female
  
        <br/><br/>

        <input type="submit" />

      </form>
    </>
  );
};

export default From;
