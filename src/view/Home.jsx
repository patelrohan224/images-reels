import React from "react";
import { images } from "../data/imgData";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigator = useNavigate();
  return (
    <div className="pb-[80px]">
      <div className="grid grid-cols-3">
        {images?.map(({ src, type }, index) => (
          <div onClick={() => navigator(`/looks/${index}`)}>
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
