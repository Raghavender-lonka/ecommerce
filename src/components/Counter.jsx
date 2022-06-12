import React, { useContext } from "react"
import CartContext2 from "./context/cart-context"

export default function Counter(props) {
  const cartCtx = useContext(CartContext2)

  const cartItemRemoveHandler = (e) => {
    cartCtx.removeItem(e.target.id)
  }

  return (
    <>
      <th>${+props.price * props.amount}</th>
      <th>
        <div className="counter__div">
          <button onClick={cartItemRemoveHandler} id={props.id}>
            -
          </button>
          <span>{props.amount}</span>
          <button onClick={props.onAdd}>+</button>
        </div>
      </th>
    </>
  )
}
