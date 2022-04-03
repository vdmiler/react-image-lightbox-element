import React, { useState } from "react";
import Gallery from "./react-image-lightbox-element/src";

const images = [
  "//placekitten.com/1500/500",
  "//placekitten.com/4000/3000",
  "//placekitten.com/800/1200",
  "//placekitten.com/1500/1500",
];

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState(null);
  return (
    <div className='App'>
      <button
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        onClick={() => setCurrentImage(images[0])}
      >
        Open Gallery
      </button>

      <Gallery
        galleryData={images}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        currentImage={currentImage}
        setCurrentImage={setCurrentImage}
      />
    </div>
  );
};

export default App;
