import React, { useState } from "react"

// import homepodMini from "../../assests/Products/Apple_homepod-mini-white.png"

export const CartContext = React.createContext()

export default function CartContextProvider(props) {
  const [id, setId] = useState([
    {
      id: "1",
      qty: 1,
    },
  ])
  // console.log("cart context", id)

  return (
    <CartContext.Provider value={[id, setId]}>
      {props.children}
    </CartContext.Provider>
  )
}
