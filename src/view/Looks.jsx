import React, { useState } from "react";
import Lookbook from "../common/SwipComponent";
import { images } from "../data/imgData";
import { useNavigate } from "react-router-dom";

const Looks = () => {
  const [, set] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="w-full h-[100vh]">
      <div
        onClick={() => navigate(-1)}
        className="absolute z-[1] top-[10px] left-[10px]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <rect width="24" height="24" fill="black" />
          <path
            d="M12 19l-7-7 7-7"
            stroke="white"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <Lookbook data={images} />
    </div>
  );
};

export default Looks;
