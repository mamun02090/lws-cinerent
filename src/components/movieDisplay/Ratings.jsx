import React from "react";
import { FaStar } from "react-icons/fa";
function Ratings({ value }) {
  const stars = Array(value).fill(1);
  return (
    <div className="flex items-center space-x-1 mb-5">
      {stars.map((star, index) => (
        <FaStar key={index} className="text-primary" />
      ))}
    </div>
  );
}

export default Ratings;
