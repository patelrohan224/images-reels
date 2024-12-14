import React, { useEffect, useRef, useState } from "react";
import Annotations from "./Annotations.jsx";
import ProductCards from "./ProductCards.jsx";

const Look = ({ data, isActive, next }) => {
  const { type, src, annotations, productItems } = data;
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [activeAnnotation, setActiveAnnotation] = useState(null);
  const productCardsRef = useRef(null);

  useEffect(() => {
    let timer;

    if (type === "img" && isActive) {
      timer = setInterval(() => {
        setProgress((prev) => {
          if (prev < 100) {
            return prev + 1;
          } else {
            clearInterval(timer);
            // next();
            return 100;
          }
        });
      }, 50);
    }

    return () => {
      clearInterval(timer);
    };
  }, [type, isActive, next]);

  useEffect(() => {
    setProgress(0);
  }, [isActive]);

  const handleVideoEnd = () => {
    setProgress(100);
    next();
  };
  const handleAnnotationClick = (annotationId) => {
    setActiveAnnotation(annotationId);
    const index = productItems.findIndex(({ id }) => id === annotationId);
    if (index !== -1 && productCardsRef.current) {
      const productCard = productCardsRef.current.children[index];
      productCard.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  };
  const muteIcon = (
    <svg
      className="h-[24px] w-[24px]"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.2071 7.20711C18.5976 6.81658 18.5976 6.18342 18.2071 5.79289C17.8166 5.40237 17.1834 5.40237 16.7929 5.79289L5.79289 16.7929C5.40237 17.1834 5.40237 17.8166 5.79289 18.2071C6.18342 18.5976 6.81658 18.5976 7.20711 18.2071L18.2071 7.20711Z"
        fill="#000000"
      />
      <path
        d="M10.8639 8.6L15.3 5.87158L10.5716 10.6H8V13.1716L6.33126 14.8403C6.12404 14.5831 6 14.256 6 13.9V10.1C6 9.27157 6.67157 8.6 7.5 8.6H10.8639Z"
        fill="#000000"
      />
      <path
        d="M16 16.2109L12.6673 14.1611L11.2135 15.615L15.7142 18.3831C16.7136 18.9978 18 18.2788 18 17.1055V8.82844L16 10.8284V16.2109Z"
        fill="#000000"
      />
    </svg>
  );

  const unmuteIcon = (
    <svg
      className="h-[24px] w-[24px]"
      fill="#000000"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        d="M11.553 3.064A.75.75 0 0112 3.75v16.5a.75.75 0 01-1.255.555L5.46 16H2.75A1.75 1.75 0 011 14.25v-4.5C1 8.784 1.784 8 2.75 8h2.71l5.285-4.805a.75.75 0 01.808-.13zM10.5 5.445l-4.245 3.86a.75.75 0 01-.505.195h-3a.25.25 0 00-.25.25v4.5c0 .138.112.25.25.25h3a.75.75 0 01.505.195l4.245 3.86V5.445z"
      />
      <path d="M18.718 4.222a.75.75 0 011.06 0c4.296 4.296 4.296 11.26 0 15.556a.75.75 0 01-1.06-1.06 9.5 9.5 0 000-13.436.75.75 0 010-1.06z" />
      <path d="M16.243 7.757a.75.75 0 10-1.061 1.061 4.5 4.5 0 010 6.364.75.75 0 001.06 1.06 6 6 0 000-8.485z" />
    </svg>
  );

  return (
    <div className="min-h-[100vh] min-w-full relative">
      {type === "img" && (
        <>
          <img src={src} alt="Look" className="w-full h-full" />
          {isActive && (
            <div
              className="absolute bottom-0 left-0 h-1 bg-[#ffffffdb]"
              style={{ width: `${progress}%` }}
            ></div>
          )}
        </>
      )}

      {type === "video" && (
        <video
          src={src}
          muted={isMuted}
          autoPlay
          onEnded={handleVideoEnd}
          controls={false}
        />
      )}

      {type === "video" && (
        <button
          className="absolute right-[10px] bottom-[10px]"
          onClick={() => setIsMuted((prev) => !prev)}
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? unmuteIcon : muteIcon}
        </button>
      )}
      {productItems && (
        <ProductCards
          ref={productCardsRef}
          onAnnotationClick={handleAnnotationClick}
          productItems={productItems}
          activeAnnotation={activeAnnotation}
        />
      )}
      {annotations && (
        <Annotations
          data={annotations}
          onClick={handleAnnotationClick}
          activeAnnotation={activeAnnotation}
        />
      )}
    </div>
  );
};

export default Look;
