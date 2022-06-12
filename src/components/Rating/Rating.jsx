import React, { useState } from "react"
import "./Rating.css"

export default function Rating() {
  const [rating, setRating] = useState(4)
  const [hover, setHover] = useState(0)
  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((index) => {
        return (
          <div className="starRatingDiv" key={index}>
            <button
              type="button"
              className={index <= (hover || rating) ? "on" : "off"}
              onClick={() => setRating(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}
            >
              <span className="star">&#9733;</span>
              {/* &#9733; is the HTML entity code for a star icon */}
            </button>
          </div>
        )
      })}
    </div>
  )
}
