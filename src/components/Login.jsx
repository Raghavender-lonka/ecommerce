import React, { useState } from "react"

import { NavLink } from "react-router-dom"
import axios from "axios"
import { useNavigate } from "react-router"
import { useEffect } from "react"

export default function Login() {
  const [state, setState] = useState({
    email: "",
    password: "",
  })
  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") === "yes") {
      navigate("/cart")
    }
  })

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value })
  }

  const callApi = () => {
    axios
      .post("http://localhost:9090/api/auth/login", state)
      .then((response) => {
        console.log("Success")
        // console.log("Token =>", response.data.token)
        localStorage.setItem("isLoggedIn", "yes")
      })
      .catch((err) => {
        console.log(err)
      })

    setState({
      email: "",
      password: "",
    })
    navigate("/cart")
  }
  return (
    <div className="login__container">
      <h1 className="login__heading">Sign in for faster checkout.</h1>

      <form className="login__form">
        <h3>Sign in to Apple Store</h3>
        {/* <label htmlFor="email">Email:</label> */}
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          id="email"
          placeholder="Enter your email address"
          required
        />{" "}
        <br />
        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          id="password"
          placeholder="Enter your password"
          required
        />
        <br />
        <button type="submit" id="login__btn" onClick={callApi}>
          Sign In
        </button>
      </form>
      <p>
        Do not have an Apple ID?{" "}
        <NavLink className={"signup__link link"} to="/signup">
          Create yours now
        </NavLink>
      </p>
    </div>
  )
}
