import React, { useState } from "react";
import './slider.css';
const Home = () => {
  const [current, setCurrent] = useState(0);
  const images = [
    "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
  ];

  function nextstate() {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  }

  function prevstate() {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  }

  return (
    <div className="slider-container">
      <h2>Image Slider</h2>
      <div className="slider">
        <button onClick={prevstate} className="nav-button prev-button">←</button>
        <div className="image-container">
          {images.map((image, index) =>
            current === index && (
              <div key={image} className="image-wrapper">
                <img src={image} alt={`Slide ${index}`} className="slider-image" />
              </div>
            )
          )}
        </div>
        <button onClick={nextstate} className="nav-button next-button">→</button>
      </div>
    </div>
  );
}

export default Home;
