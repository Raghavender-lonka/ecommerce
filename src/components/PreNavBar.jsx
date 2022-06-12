import React from "react"

import { NavLink } from "react-router-dom"

export default function PreNavBar() {
  // console.log(localStorage.getItem("isLoggedIn"))

  return (
    <div className="preNavBar__container">
      <p>
        <NavLink to="/login" className="link">
          My profile
        </NavLink>
      </p>
    </div>
  )
}
