import React, { useContext, useEffect, useState } from "react"
import { ProductContext } from "../components/context/Context"

import iphone8 from "../assests/Web/iphone_8.svg"
import StoreProducts from "../components/StoreProducts"

export default function Store() {
  const productsData = useContext(ProductContext)
  const [category, setCategory] = useState(productsData)
  const [slice, setSilce] = useState(true)

  useEffect(() => {
    let showData = productsData.filter((item) => item.category !== "Featured")
    let selectedProducts
    if (slice) {
      selectedProducts = showData.slice(0, 12)
    } else {
      selectedProducts = showData.slice(12)
    }
    setCategory(selectedProducts)
  }, [productsData, slice])

  const showProductsHandler = () => {
    setSilce((prev) => !prev)
    window.scrollTo(0, 0)
  }
  return (
    <div className="store">
      <div className="store__pagination">
        <h3>Store </h3>
      </div>
      <div className="store__container">
        <div className="store__left">
          <div className="store__accesories">
            <h2>ACCESORIES</h2>
            <div>
              <p>Apple Car</p>
              <p>2</p>
            </div>
            <div>
              <p>Air port & wireless</p>
              <p>48</p>
            </div>
            <div>
              <p>Cables & Docks</p>
              <p>14</p>
            </div>

            <div>
              <p>Cases & Films</p>
              <p>15</p>
            </div>
            <div>
              <p>Charging Devices</p>
              <p>23</p>
            </div>

            <div>
              <p>Connected Home</p>
              <p>1</p>
            </div>

            <div>
              <p>Headphones</p>
              <p>95</p>
            </div>
          </div>
          <div className="store__prices">
            <h3>PRICES</h3>
            <div>
              <p>Range:</p>
              <p>$399-499</p>
            </div>
          </div>
          <div className="store__colors">
            <h3>COLORS</h3>

            <div className="store__colors-btnDiv">
              <button className="btn-blue"></button>
              <button className="btn-red"></button>
              <button className="btn-black"></button>
              <button className="btn-yellow"></button>
              <button className="btn-gold"></button>
            </div>
          </div>
          <div className="store__brand">
            <h3>BRAND</h3>
            <div>
              <p>Apple</p>
              <p>99</p>
            </div>
            <div>
              <p>LG</p>
              <p>99</p>
            </div>
            <div>
              <p>Samung</p>
              <p>99</p>
            </div>
            <div>
              <p>Siemens</p>
              <p>99</p>
            </div>
          </div>
        </div>
        <div className="store__right">
          <div className="store__banner">
            <div className="store__banner-text">
              <h1 className="store__banner-heading">iPhone 6 Plus</h1>
              <p>Performance and design. Taken right to the edge.</p>
              <button className="store__banner-btn">SHOP NOW</button>
            </div>
            <img src={iphone8} alt="iPhone" className="store__banner-img" />
          </div>
          <div className="store__productsList">
            <StoreProducts category={category} />
          </div>
          <div className="store__pagination-bottom">
            <h2 onClick={showProductsHandler}>&#8592;</h2>
            <h2 onClick={showProductsHandler}>&#8594;</h2>
          </div>
        </div>
      </div>
    </div>
  )
}
