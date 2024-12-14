import React from "react";

const Annotations = ({ data, activeAnnotation, onClick }) => {
  return (
    <div>
      {data.map((annotation, index) => (
        <div
          key={annotation.id}
          style={{ left: `${annotation.x}%`, top: `${annotation.y}%` }}
          className={`absolute bg-white rounded-[20px] h-[20px] w-[20px] cursor-pointer ${
            activeAnnotation === annotation.id
              ? "bg-blue-500 border-4 border-white"
              : ""
          }`}
          onClick={() => onClick(annotation.id)}
        ></div>
      ))}
    </div>
  );
};

export default Annotations;
