import React, { useState, useEffect } from 'react';

const ImageSlider = ({ images }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(timer); // Clean up on unmount
  }, [images]);

  return (
    <div>
      <img src={images[index]} style={{width: '100%', height: 'auto'}} alt="slideshow" />
      <div style={{textAlign: 'center'}}>
        {images.map((image, idx) => (
          <span key={idx} style={{padding: '1px', cursor: 'pointer'}}
                onClick={() => setIndex(idx)}>
            {idx === index ? '●' : '○'}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
