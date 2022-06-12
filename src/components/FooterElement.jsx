import React from "react"

const FooterElement = (props) => {
  return (
    <div className="footer__bottomRowDiv">
      <h3>{props.title}</h3>
      <ul className="footer__bottomRow-ul">
        <li>About Us</li>
        <li>Information</li>
        <li>Privacy Policy</li>
        <li>Terms & Conditions</li>
      </ul>
    </div>
  )
}

export default FooterElement
