import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import Look from "./Look";

const Lookbook = ({ data, lookId }) => {
  const [currentIndex, setCurrentIndex] = useState(lookId || 0);

  const handlers = useSwipeable({
    onSwipedUp: () => {
      if (currentIndex < data.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    },
    onSwipedDown: () => {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    },
    trackMouse: true,
  });

  useEffect(() => {
    setCurrentIndex(lookId);
  }, [lookId]);

  return (
    <div {...handlers} className="w-full h-full overflow-hidden">
      <div
        className="flex flex-col w-full h-full"
        style={{
          transform: `translateY(-${currentIndex * 100}%)`,
          transition: "transform 0.3s ease",
        }}
      >
        {data.map((look, index) => (
          <Look
            key={index}
            data={look}
            isActive={index === currentIndex}
            next={() => {
              if (currentIndex < data.length - 1) {
                setCurrentIndex(currentIndex + 1);
              }
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Lookbook;
