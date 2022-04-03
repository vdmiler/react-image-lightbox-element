# React Image Lightbox Element

> A simple lightbox component for displaying images in a React project.

## Usage

```js
import React, { useState } from "react";
import { Gallery } from "react-image-lightbox-element";

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
```

## API

| Prop            | Type             | Description                 |
| --------------- | ---------------- | --------------------------- |
| galleryData     | array of strings | Array with links to images. |
| currentIndex    | number           | Сurrent index of image      |
| setCurrentIndex | function         | Function for change state   |
| currentImage    | string           | Current path to image       |
| setCurrentImage | function         | Function for change state   |

## Browser Support

Supports Chrome, firefox, safari, edge, and ie 9+.
The star is SVG, so this library fails for any browser that doesn't support svg.
