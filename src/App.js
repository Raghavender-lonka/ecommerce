import "./App.css"

import { Routes, Route, Navigate } from "react-router-dom"

import Footer from "./components/Footer"
import Header from "./components/Header"
import HomePage from "./pages/Home"
import Store from "./pages/Store"
import Cart from "./pages/Cart"
import Login from "./components/Login"
import SignUp from "./components/SignUp"
import { memo } from "react"
import CartCounterTotal from "./components/CartCounterTotal"

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/store" element={<Store />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/checkout" element={<CartCounterTotal />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default memo(App)
