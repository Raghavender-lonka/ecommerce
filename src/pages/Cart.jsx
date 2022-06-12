import React, { useContext, useState } from "react"
import { useEffect } from "react"

import { NavLink } from "react-router-dom"

import { CartContext } from "../components/context/CartContext"
import { ProductContext } from "../components/context/Context"

import Counter from "../components/Counter"
// import CartCounterTotal from "../components/CartCounterTotal"

const Cart = () => {
  const [cartData] = useContext(CartContext)
  const productsData = useContext(ProductContext)
  const [showproducts, setShowProducts] = useState()
  const [cart, setCart] = useState(false)

  useEffect(() => {
    let cartItems = cartData.map((item) => item.id)
    let newData = productsData.filter((item) => cartItems.includes(item.id))
    if (newData) {
      setShowProducts(newData)
      setCart(true)
    } else {
      setShowProducts("")
      setCart(false)
    }
  }, [cartData, productsData])

  // console.log(subTotal)

  // const Data = () =>
  //   useCallback(() => {

  //   }, [cartData, productsData])
  // Data()

  return (
    <div className="cart">
      <div className="cart__pagination">
        <h3>Cart </h3>
      </div>
      <div className="cart__display">
        {cart ? (
          <table className="cart__table">
            <tbody>
              <tr>
                <th>{""}</th>
                <th>PRODUCT</th>
                <th>PRICE</th>
                <th>QTY</th>
                <th>UNIT PRICE</th>
              </tr>
              {showproducts.map((item) => (
                <tr key={item.id}>
                  <th> &#10006;</th>
                  <th className="cart__table-product-img">
                    <img src={item.image} alt="product" /> {item.title}
                  </th>
                  <Counter price={item.price} id={item.id} />
                  <th>$ {item.price}</th>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <h2 className="noProducts">No Products in the cart...</h2>
        )}
        <div className="cart__bottom">
          <div className="cart__voucherDiv">
            <input type="text" placeholder="Voucher code" />
            <button>Redeem</button>
          </div>
          <div className="cart__checkout-btnDiv">
            <button className="cart__checkout-btn">
              <NavLink to="/checkout" className={"link"}>
                Checkout
              </NavLink>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
