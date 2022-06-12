import React, { useContext, useState } from "react"

import Rating from "./Rating/Rating"
import { ProductContext } from "./context/Context"
import CartContext2 from "./context/cart-context"

import { MdOutlineFavoriteBorder } from "react-icons/md"
import AddIcon from "./AddIcon"

export default function StoreProducts(props) {
  const productsData = useContext(ProductContext)
  const [product] = useState(productsData)
  const cartCtx = useContext(CartContext2)

  const addToCartHandler = (e) => {
    let selectedItem = product.filter((item) => item.id === e.target.id)
    cartCtx.addItem({
      id: selectedItem[0].id,
      name: selectedItem[0].title,
      price: selectedItem[0].price,
      image: selectedItem[0].image,
      category: selectedItem[0].category,
      rating: selectedItem[0].rating,
      amount: 1,
    })
  }

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
        {product.map((item) => (
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
