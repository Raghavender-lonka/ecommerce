import React from "react"
import facebookIcon from "../assests/Web/facebook.svg"
import twitterIcon from "../assests/Web/twitter.svg"
import paypal from "../assests/Web/Paypal.svg"
import masterCard from "../assests/Web/master_card.svg"
import westernUnion from "../assests/Web/Western_union.svg"
import visa from "../assests/Web/visa.svg"

import FooterElement from "./FooterElement"

const Footer = () => {
  return (
    <>
      <hr />
      <div className="footer">
        <div className="footer__topRow">
          <div className="footer__child">
            <h1 className="footer__shop-title">iSHOP</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever.Since the 1500s, when an unknown printer.
            </p>
          </div>
          <div className="footer__child">
            <h2 className="footer__follow-title ">Follow Us</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <div className="footer__follow-icons">
              <img src={facebookIcon} alt="facebook" />
              <img src={twitterIcon} alt="twitter" />
            </div>
          </div>
          <div className="footer__child">
            <h2 className="footer__contact-title">Contact Us</h2>
            <p>iShop: address @building 124</p>
            <p>Call us now: 0123-456-789 </p>
            <p>Email: support@whatever.com</p>
          </div>
        </div>
        <hr />
        <div className="footer__bottomRow ">
          <FooterElement title={"Information"} />
          <FooterElement title={"Service"} />
          <FooterElement title={"Extras"} />
          <FooterElement title={"My Account"} />
          <FooterElement title={"Userful Links"} />
          <FooterElement title={"Our Offers"} />
        </div>
      </div>
      <hr />
      <div className="footer__payments">
        <img src={westernUnion} alt="western-union" />
        <img src={masterCard} alt="master-card" />
        <img src={paypal} alt="paypal" />
        <img src={visa} alt="visa" />
      </div>
    </>
  )
}

export default Footer
