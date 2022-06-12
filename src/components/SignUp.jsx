import React, { useState } from "react"

import { NavLink } from "react-router-dom"
import axios from "axios"
import { useNavigate } from "react-router"

export default function SignUp() {
  const [state, setState] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
  })
  const navigate = useNavigate()
  //   useEffect(callApi, [state])
  const callApi = () => {
    axios
      .post("http://localhost:9090/api/auth/signup", state)
      .then((response) => {
        // console.log("Success")
        setState({
          name: "",
          email: "",
          phoneNumber: "",
          password: "",
        })
        navigate("/cart")
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value })
  }
  //   console.log(state)

  const formSubmitHandler = (e) => {
    e.preventDefault()
  }

  return (
    <div className="signup__container">
      <h1 className="signup__heading">Sign Up for faster checkout.</h1>

      <form className="signup__form" onSubmit={formSubmitHandler}>
        <h3>Sign up to Apple Store</h3>
        {/* <label htmlFor="email">Email:</label> */}
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
          id="name"
          placeholder="Enter your name"
          required
        />{" "}
        <br />
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
          type="tel"
          name="phoneNumber"
          value={state.phoneNumber}
          onChange={handleChange}
          id="phoneNumber"
          placeholder="Enter your phone number"
          required
        />
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
        <button type="submit" id="signup__btn" onClick={callApi}>
          Sign In
        </button>
      </form>
      <p>
        You already have an Apple ID?{" "}
        <NavLink className={"login__link link"} to="/login">
          Find it here
        </NavLink>
      </p>
    </div>
  )
}
