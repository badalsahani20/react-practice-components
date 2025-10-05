import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./style.css";

const StarRating = ({ noOfStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(index) {
    console.log(index);
    setRating(index);
  }

  function handleMouseEnter(index) {
    setHover(index);
  }

  function handleMouseLeave() {
    setHover(rating);
  }

  return (
    <div className="star-rating">
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? "active" : "inactive"}
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
            size={40}
          />
        );
      })}
      {rating > 0 && (
        <div className="rating-label">
          You rated {rating} {rating === 1 ? "star" : "stars"} ⭐
        </div>
      )}
    </div>
  );
};

export default StarRating;
