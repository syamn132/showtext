import React, { useState } from 'react';
import './App.css';
import originalImage from './bulboff.png';
import replacedImage from './bulbon.png';

function Item() {
  const [showText, setShowText] = useState(false);
  const [count, setCount] = useState(0);
  const [imageSource, setImageSource] = useState(originalImage);
  const imageAltText = "Image";

  const handleClick = () => {
    setShowText(!showText);
    setCount(count+1);
    setImageSource(imageSource === originalImage ? replacedImage : originalImage);
  };

  return (
    <div>
        <img src={imageSource} alt = {imageAltText} onClick={handleClick} width="150px"/>
        {showText && <p className='greetings'>Hello World</p>}
        <p className='cnt' >{count}</p>
        <button className='button' onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default Item;