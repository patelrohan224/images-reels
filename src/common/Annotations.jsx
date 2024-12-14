import React from "react";

const Annotations = ({ data, active }) => {
  return (
    <div>
      {data.map((annotation, index) => (
        <div
          key={index}
          style={{ left: `${annotation.x}%`, top: `${annotation.y}%` }}
          className={`absolute bg-white rounded-[20px] h-[20px] w-[20px] ${
            active === annotation?.id ? "h-[30px] w-[30px] rounded-[30px]" : ""
          }`}
        ></div>
      ))}
    </div>
  );
};

export default Annotations;
