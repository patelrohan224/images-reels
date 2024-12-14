import React from "react";

const Annotations = ({ data }) => {
  return (
    <div>
      {data.map((annotation, index) => (
        <div
          key={index}
          style={{ left: `${annotation.x}%`, top: `${annotation.y}%` }}
        >
          <span>
            {annotation.product}
            <a href={`${annotation.id}`}>Shop</a>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Annotations;
