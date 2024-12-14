import React, { forwardRef } from "react";

const ProductCards = forwardRef(
  ({ productItems, onAnnotationClick, activeAnnotation }, ref) => {
    return (
      <div
        ref={ref}
        className="absolute flex flex-row w-full gap-2 overflow-scroll bottom-4 px-[10px] scrollbar-hidden"
      >
        {productItems?.map(({ src, name, price, id }) => {
          return (
            <div
              className={`flex flex-row items-center bg-white rounded-sm flex-shrink-1 h-fit w-fit ${
                activeAnnotation === id ? "border border-blue-500" : ""
              }`}
              onClick={() => onAnnotationClick(id)}
            >
              <div className="w-[80px] h-[100px] p-1">
                <img src={src} alt={src} className="w-full h-full" />
              </div>
              <div className="flex flex-col mx-2 p2">
                <div>{name}</div>
                <div>₹{price}</div>
              </div>
              <div className="text-white bg-[green] rounded-lg text-[12px] p-1 m-2">
                Shop
              </div>
            </div>
          );
        })}
      </div>
    );
  }
);

export default ProductCards;
