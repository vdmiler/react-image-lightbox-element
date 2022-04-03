import React from "react";
import "./styles.css";

import CloseIcon from "./icons/CloseIcon";
import ArrowLeftIcon from "./icons/ArrowLeftIcon";
import ArrowRightIcon from "./icons/ArrowRightIcon";

const Gallery = ({
  galleryData,
  currentIndex,
  setCurrentIndex,
  currentImage,
  setCurrentImage,
}) => {
  const handleClosed = (e) => {
    setCurrentImage(null);
  };

  const handelRotationRight = (e) => {
    e.stopPropagation();
    const totalLength = galleryData.length;
    if (currentIndex + 1 >= totalLength) {
      const newUrl = galleryData[0];
      setCurrentIndex(0);
      setCurrentImage(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = galleryData.filter((item) => {
      return galleryData.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0];
    setCurrentImage(newItem);
    setCurrentIndex(newIndex);
  };

  const handelRotationLeft = (e) => {
    e.stopPropagation();
    const totalLength = galleryData.length;
    if (currentIndex === 0) {
      const newUrl = galleryData[totalLength - 1];
      setCurrentIndex(totalLength - 1);
      setCurrentImage(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = galleryData.filter((item) => {
      return galleryData.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0];
    setCurrentImage(newItem);
    setCurrentIndex(newIndex);
  };
  return (
    <>
      <div
        className={`gallery-image-overlay ${currentImage ? "isActive" : ""}`}
        onClick={handleClosed}
      >
        <img
          className='gallery-image-enlarge'
          src={currentImage}
          alt=''
          onClick={(e) => e.stopPropagation()}
        />
        <div className='gallery-close-button' onClick={handleClosed}>
          <CloseIcon />
        </div>
        <button
          className='gallery-arrows gallery-arrow-left'
          onClick={handelRotationLeft}
        >
          <ArrowLeftIcon />
        </button>
        <button
          className='gallery-arrows gallery-arrow-right'
          onClick={handelRotationRight}
        >
          <ArrowRightIcon />
        </button>
      </div>
    </>
  );
};

export default Gallery;
