import React from "react";
import { images } from "../data/imgData";

const Home = () => {
  return (
    <div className="pb-[80px]">
      <div className="grid grid-cols-3">
        {images?.map((val) => (
          <div>
            <img src={val} alt={val} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
