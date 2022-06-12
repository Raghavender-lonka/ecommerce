import React from "react"
import { NavLink } from "react-router-dom"
import ishopIcon from "../assests/Web/iSHOP Logo.svg"
import PreNavBar from "./PreNavBar"

const Header = () => {
  return (
    <div className="header">
      <PreNavBar />
      <div className="header__iconDiv flex">
        <img className="header__img" src={ishopIcon} alt="ishop logo" />
      </div>
      <div className="header__navDiv">
        <nav className="header__navBar">
          <ul>
            <li>
              <NavLink
                to={"/home"}
                className={({ isActive }) =>
                  isActive ? "link-active" : "link"
                }
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/store"}
                className={({ isActive }) =>
                  isActive ? "link-active" : "link"
                }
              >
                STORE
              </NavLink>
            </li>
            <li>IPHONE</li>
            <li>IPAD</li>
            <li>MACBOOK</li>
            <li>ACCESORIES</li>
            {/* <li>
              <NavLink to={"/cart"}>Cart</NavLink>
            </li> */}
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Header
