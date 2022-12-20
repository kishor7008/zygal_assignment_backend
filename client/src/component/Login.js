import React, { Component, useState } from 'react'
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'
const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  // const[show,setShow]=useState(false)
  const navigate = useNavigate()
  const handelChange = (e) => {
    e.preventDefault();
    fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ email, password })
    }).then(res => res.json())
      .then((data) => {
        console.log(data)
        if (data.status === "ok") {
          navigate("/page")

        } else {
          navigate("/")
        }
      })
    setEmail("")
    setPassword("")

    console.log(email, password)
  }

  return (
    <form style={{ width: "18rem", margin: "auto", marginTop: "7%", padding: "10px" }} onSubmit={handelChange} className="border">
      <i class="fa-solid fa-chevron-left"></i>
      <p>Login</p>
      <h1>Please enter your details</h1>

      <div className="mb-3">
        <label>Username</label>
        <input
          type="text"
          className="form-control"
          placeholder="Type your username here"
          onChange={(e) => setEmail(e.target.value)}

        />
      </div>

      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Type your password here"
          onChange={(e) => setPassword(e.target.value)}

        />
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </div>

    </form>
  )

}
export default Login;