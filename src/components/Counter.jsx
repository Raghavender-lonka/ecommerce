import React, { useState, useContext } from "react"
// import { useEffect } from "react"

import { CartContext } from "./context/CartContext"

export default function Counter({ price, id }) {
  const [count, setCount] = useState(1)

  const [cart] = useContext(CartContext)

  const [disableBtn, setDisableBtn] = useState("")

  // console.log(cart)

  const decreaseCountHandler = () => {
    setCount((prev) => prev - 1)
    if (count <= 1) {
      setDisableBtn(true)
      cart.forEach((item) => {
        if (item.id === id) {
          item.qty = +item.qty - 1
        }
      })
    }
  }

  const increaseCountHandler = () => {
    setCount((prev) => prev + 1)
    if (count > 1) {
      setDisableBtn("")
      cart.forEach((item) => {
        if (item.id === id) {
          item.qty = +item.qty + 1
        }
      })
    }
  }
  return (
    <>
      <th>$ {+price * count}</th>
      <th>
        <div className="counter__div">
          <button onClick={decreaseCountHandler} disabled={disableBtn}>
            -
          </button>
          <span>{count}</span>
          <button onClick={increaseCountHandler}>+</button>
        </div>
      </th>
    </>
  )
}
