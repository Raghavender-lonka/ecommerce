import React from "react"

export default function CartCounterTotal({ total }) {
  return (
    <div className="cart__counterDiv">
      <div className="cart__counter">
        <h2>Your Cart</h2>
        <div className="cart__counter-details">
          <div>
            <p>Subtotal</p>
            <p>${total}</p>
          </div>
          <div>
            <p>Shipping fee</p>
            <p>$20</p>
          </div>
          <div>
            <p>Coupon</p>
            <p>-</p>
          </div>
        </div>
        <hr />
        <div className="cart__counter-total">
          <h2>TOTAL</h2>
          <h2>${total + 20}</h2>
        </div>
        <div className="checkout-btnsDiv">
          <button className="cart__checkout-btn">Check-out</button>
        </div>
      </div>
    </div>
  )
}
