import React from "react";
import { images } from "../data/imgData";

const Home = () => {
  return (
    <div className="pb-[80px]">
      <div className="grid grid-cols-3">
        {images?.map(({ src, type }) => (
          <div>
            {type === "img" ? (
              <img src={src} alt={src} />
            ) : (
              <video src={src} muted={true} autoPlay controls={false} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
