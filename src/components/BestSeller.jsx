import React, { useContext, useEffect, useState } from "react"

import { MdOutlineFavoriteBorder } from "react-icons/md"

import { ProductContext } from "./context/Context"
import { CartContext } from "./context/CartContext"
import Rating from "./Rating/Rating"
import AddIcon from "./AddIcon"
// import ProductBtns from "./ProductBtns"

const BestSeller = () => {
  const productsData = useContext(ProductContext)
  const [category, setCategory] = useState(productsData)
  //   const [loading, setLoading] = useState(true)
  const [showMore, setShowMore] = useState(false)

  const [cart, setCart] = useContext(CartContext)

  useEffect(() => {
    let products = productsData.filter((item) => item.category !== "Featured")
    if (!showMore) {
      setCategory(products.slice(0, 8))
    } else {
      setCategory(products)
    }
  }, [showMore, productsData])

  const showCategoryHandler = (e) => {
    // console.log(e.target.name)
    let category = e.target.name
    if (category === "All") {
      let products = productsData.filter((item) => item.category !== "Featured")
      setCategory(products.slice(0, 8))
    } else if (category === "Mac") {
      setCategory(productsData.filter((item) => item.category === category))
    } else if (category === "iPhone") {
      setCategory(productsData.filter((item) => item.category === category))
    } else if (category === "iPad") {
      setCategory(productsData.filter((item) => item.category === category))
    } else if (category === "iPod") {
      setCategory(productsData.filter((item) => item.category === category))
    } else if (category === "Accessories") {
      setCategory(productsData.filter((item) => item.category === category))
    }
  }
  //   console.log(category)

  const showMoreHandle = () => {
    setShowMore((prev) => !prev)
  }

  const addToCartHandler = (e) => {
    let newId = {
      id: e.target.id,
      qty: 0,
    }
    setCart([...cart, newId])
  }
  // console.log("cart", cart)
  return (
    <>
      <div className="bestSeller">
        <div className="bestSeller__top">
          <h1 className="bestSeller__heading">BEST SELLER</h1>

          <ul className="bestSeller__ul">
            <li>
              <button name="All" onClick={showCategoryHandler}>
                All
              </button>
            </li>

            <li>
              <button name="Mac" onClick={showCategoryHandler}>
                Mac
              </button>
            </li>
            <li>
              <button name="iPhone" onClick={showCategoryHandler}>
                iPhone
              </button>
            </li>
            <li>
              <button name="iPad" onClick={showCategoryHandler}>
                iPad
              </button>
            </li>
            <li>
              <button name="iPod" onClick={showCategoryHandler}>
                iPod
              </button>
            </li>
            <li>
              <button name="Accessories" onClick={showCategoryHandler}>
                Accessories
              </button>
            </li>
          </ul>
        </div>
        {
          <div className="bestSeller__bottom">
            {category.map((item) => (
              <div className="bestSeller__product" key={item.id} id={item.id}>
                <img
                  className="bestSeller__product-img"
                  src={item.image}
                  alt="best-seller product"
                />
                <div className="bestSeller__product-textDiv">
                  <p className="bestSeller__product-title">{item.title}</p>
                  <Rating />
                  <h3 className="bestSeller__product-price">
                    ${item.price}{" "}
                    <span className="bestSeller-priceOff">$599</span>
                  </h3>
                </div>
                <div className="bestSeller__hot">
                  <p>HOT</p>
                </div>
                {/* <ProductBtns id={item.id} /> */}
                <div className={"bestSeller__cart"}>
                  <span>
                    <MdOutlineFavoriteBorder className="bestSeller__favIcon" />
                  </span>

                  <span
                    className="bestSeller__addToCart"
                    onClick={addToCartHandler}
                    id={item.id}
                  >
                    {/* <FaShoppingCart id={item.id} className={"icon"} /> */}
                    <AddIcon id={item.id} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        }
        <div className="bestSellor__loadDiv">
          <p className="bestSeller__loadMore" onClick={showMoreHandle}>
            LOAD {!showMore ? "MORE" : "LESS"}
          </p>
        </div>
      </div>
    </>
  )
}

export default BestSeller
