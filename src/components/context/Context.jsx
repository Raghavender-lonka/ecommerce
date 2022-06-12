import React from "react"
import mac from "../../assests/Products/apple_macbook.png"
import macAir from "../../assests/Products/Apple Macbook Air.png"
import watch from "../../assests/Products/Apple Watch 21-1.png"
import iPod from "../../assests/Products/apple_iPod_2A.png"
import iPhone from "../../assests/Products/iphone.png"
import iPhone11 from "../../assests/Products/Apple iPhone 11.png"
import iPad from "../../assests/Products/Apple Ipad.png"
import beats from "../../assests/Web/beats_solo_2.svg"
import hSquare from "../../assests/Web/H-squared.svg"
import netatmo from "../../assests/Web/Netatmo_rain.svg"
import smartwatch from "../../assests/Products/smart_watch.png"
import SmartwatchMagic from "../../assests/Products/Apple Smartwatch Magic.png"
import camera from "../../assests/Products/design-hero_2x.png"
import macMini from "../../assests/Products/New Apple Mac Mini.png"
import homepodMini from "../../assests/Products/Apple_homepod-mini-white.png"
import airpods2 from "../../assests/Products/airpods2.png"

export const ProductContext = React.createContext()

export default function ProductContextProvdier(props) {
  let products = [
    {
      title: "Apple Macbook Pro",
      price: "499",
      rating: "4",
      image: mac,
      id: "1",
      category: "Mac",
    },
    {
      title: "Apple Macbook Air",
      price: "499",
      rating: "4",
      image: macAir,
      id: "2",
      category: "Mac",
    },
    {
      title: "Apple iPhone 11",
      price: "499",
      rating: "4",
      image: iPhone11,
      id: "3",
      category: "iPhone",
    },
    {
      title: "Apple iPhone ",
      price: "499",
      rating: "4",
      image: iPhone,
      id: "4",
      category: "iPhone",
    },
    {
      title: "Apple iPad ",
      price: "499",
      rating: "4",
      image: iPad,
      id: "5",
      category: "iPad",
    },
    {
      title: "Apple Watch 21-1 ",
      price: "499",
      rating: "4",
      image: watch,
      id: "6",
      category: "Accessories",
    },
    {
      title: "Apple iPod 2A",
      price: "499",
      rating: "4",
      image: iPod,
      id: "7",
      category: "iPod",
    },
    {
      title: "Beats Solo 2 On Ear Headphones - Black",
      price: "499",
      rating: "4",
      image: beats,
      id: "8",
      category: "Featured",
    },
    {
      title: "H-Squared tvTray",
      price: "499",
      rating: "4",
      image: hSquare,
      id: "9",
      category: "Featured",
    },
    {
      title: "Netatmo Rain Gauge",
      price: "499",
      rating: "4",
      image: netatmo,
      id: "10",
      category: "Featured",
    },
    {
      title: "Apple Smartwatch 2",
      price: "499",
      rating: "4",
      image: smartwatch,
      id: "11",
      category: "Accessories",
    },
    {
      title: "Apple Smartwatch Magic",
      price: "499",
      rating: "4",
      image: SmartwatchMagic,
      id: "12",
      category: "Accessories",
    },
    {
      title: "Apple Camera",
      price: "499",
      rating: "4",
      image: camera,
      id: "13",
      category: "Accessories",
    },
    {
      title: "New Apple Mac Mini",
      price: "499",
      rating: "4",
      image: macMini,
      id: "14",
      category: "Accessories",
    },
    {
      title: "Apple Homepod Mini",
      price: "499",
      rating: "4",
      image: homepodMini,
      id: "15",
      category: "Accessories",
    },
    {
      title: "Apple Airpods Max",
      price: "499",
      rating: "4",
      image: airpods2,
      id: "16",
      category: "Accessories",
    },
  ]
  return (
    <ProductContext.Provider value={products}>
      {props.children}
    </ProductContext.Provider>
  )
}
