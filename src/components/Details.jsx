import React from "react"

const Details = (props) => {
  return (
    <div className="details__topic">
      <img src={props.img} alt="features" />
      <h2>{props.heading}</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor minim veniam, quis nostrud reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur
      </p>
    </div>
  )
}

export default Details
