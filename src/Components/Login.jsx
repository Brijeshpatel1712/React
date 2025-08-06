import axios from 'axios'
import React, { useState } from 'react'
import '../App.css'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function handleSubmit(e) {
    e.preventDefault()

    const loginInfo = { email, password }

    localStorage.setItem("token", JSON.stringify([loginInfo]))

    axios.post('http://localhost:3000/user', loginInfo)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  return (
    <div className="login-container">
      <h1>Login Page</h1>

      <form className="login-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <input type="submit" value="Login" />
      </form>
    </div>
  )
}

export default Login
