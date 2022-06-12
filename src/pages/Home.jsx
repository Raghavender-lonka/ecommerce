import React from "react"
import corousel_3 from "../assests/miscellaneous/corousel_3.png"
import iPhone from "../assests/Web/iphone_6_plus.svg"
import shipping from "../assests/Web/shipping.svg"
import refund from "../assests/Web/refund.svg"
import support from "../assests/Web/support.svg"
import moblie from "../assests/miscellaneous/mobile_c3.png"

import Details from "../components/Details"
import BestSeller from "../components/BestSeller"
import Featured from "../components/Featured"
// import FeaturedProducts from "./FeaturedProducts"

const HomePage = () => {
  return (
    <div className="Home">
      <div className="banner">
        <img className="banner__img" src={corousel_3} alt="corousel_3" />
        <img className="banner__img-moblie" src={moblie} alt="head-set" />
      </div>

      {/* Best Seller */}

      <BestSeller />

      {/* Banner2 */}

      <div className="banner2">
        <div className="banner2__text">
          <h1 className="banner2-heading">iPhone 6 Plus</h1>
          <p>Performance and design. Taken right to the edge.</p>
          <button className="banner2-btn">SHOP NOW</button>
        </div>
        <img src={iPhone} alt="iPhone" className="banner2__img" />
      </div>

      {/* Details */}

      <div className="details">
        <Details img={shipping} heading={"FREE SHIPPING"} />
        <Details img={refund} heading={"100% REFUND"} />
        <Details img={support} heading={"SUPPORT 24/7"} />
      </div>

      {/* Featured Products */}

      <Featured />
    </div>
  )
}

export default HomePage
