import React, { useContext } from "react"

import Rating from "./Rating/Rating"
import { CartContext } from "./context/CartContext"

import { MdOutlineFavoriteBorder } from "react-icons/md"
import AddIcon from "./AddIcon"

export default function StoreProducts(props) {
  const { category } = props

  const [cart, setCart] = useContext(CartContext)

  const addToCartHandler = (e) => {
    let newId = {
      id: e.target.id,
      qty: 0,
    }
    setCart([...cart, newId])
  }
  // console.log("store", cart)

  return (
    <>
      {/* <div className="store__products-header">
        <p>{category.length} items</p>
        <p>Show {category.length} </p>
        <select name="show" id="show">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>

        <div className="store__products-displayStyle">
          <p>Column</p>
          <p>Row</p>
        </div>
      </div> */}
      <div className="store__products-container">
        {category.map((item) => (
          <div className="store__products" key={item.id}>
            <div className="store__product">
              <img
                className="store__product-img"
                src={item.image}
                alt="best-seller product"
              />
              <div className="store__product-textDiv">
                <p className="store__product-title">{item.title}</p>
                <Rating />
                <h3 className="store__product-price">
                  ${item.price} <span className="store-priceOff"> $599</span>
                </h3>
              </div>
            </div>
            <div className={"store__products-cart"}>
              <span>
                <MdOutlineFavoriteBorder className="store__products-favIcon" />
              </span>
              <span
                className="store__products-addToCart"
                onClick={addToCartHandler}
                id={item.id}
              >
                <AddIcon id={item.id} />
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
