import React, { useContext, useEffect, useState } from "react"
import { ProductContext } from "./context/Context"

import "./Featured.css"
import Rating from "./Rating/Rating"

export default function Featured() {
  const featuredData = useContext(ProductContext)
  const [FeaturedProducts, setFeaturedProducts] = useState(featuredData)

  useEffect(() => {
    setFeaturedProducts(
      featuredData.filter((item) => item.category === "Featured")
    )
  }, [featuredData])
  return (
    <div className="featured__section">
      <h2>FEATURED PRODUCTS</h2>
      {/* <button>left</button> */}
      <div className="featured__products">
        {FeaturedProducts.map((item) => (
          <div className="featured" key={item.id}>
            <div className="featutred__imgDiv">
              <img src={item.image} alt="featured-products" />
            </div>
            <div className="featured__details">
              <p className="featured__title">{item.title}</p>
              <Rating />
              <h3 className="featured__price">${item.price}</h3>
            </div>
          </div>
        ))}
      </div>
      {/* <button>right</button> */}
    </div>
  )
}
