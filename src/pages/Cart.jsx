import React, { useContext } from "react"

import CartCounterTotal from "../components/CartCounterTotal"
import CartContext2 from "../components/context/cart-context"

import Counter from "../components/Counter"

const Cart = () => {
  const cartCtx = useContext(CartContext2)
  const cart = cartCtx.items.length > 0

  const totalAmount = cartCtx.totalAmount

  const cartItemRemoveHandler = (e) => {
    cartCtx.removeItem(e.target.id)
  }

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 })
  }

  return (
    <div className="cart">
      <div className="cart__pagination">
        <h3>Cart </h3>
      </div>
      {cart ? (
        <div className="cart__display">
          {
            <table className="cart__table">
              <tbody>
                <tr>
                  <th>{""}</th>
                  <th>PRODUCT</th>
                  <th>PRICE</th>
                  <th>QTY</th>
                  <th>UNIT PRICE</th>
                </tr>
                {cartCtx.items.map((item) => (
                  <tr key={item.id}>
                    <th
                      onClick={cartItemRemoveHandler}
                      id={item.id}
                      style={{ cursor: "pointer" }}
                    >
                      {" "}
                      &#10006;
                    </th>
                    <th className="cart__table-product-img">
                      <img src={item.image} alt="product" /> {item.title}
                    </th>
                    <Counter
                      price={item.price}
                      id={item.id}
                      name={item.name}
                      amount={item.amount}
                      onAdd={cartItemAddHandler.bind(null, item)}
                    />
                    <th>$ {item.price}</th>
                  </tr>
                ))}
              </tbody>
            </table>
          }
          <div className="cart__bottom">
            <div className="cart__voucherDiv">
              <input type="text" placeholder="Voucher code" />
              <button>Redeem</button>
            </div>
            <CartCounterTotal total={totalAmount} />
          </div>
        </div>
      ) : (
        <h2 className="noProducts">No Products in the cart...</h2>
      )}
    </div>
  )
}

export default Cart
