import React, { useEffect, useState } from 'react'

const Slider = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // images is a array of images ----
    const images = [
      'https://curefoods-images.eatfit.in/tr:w-622,ar-480:200//image/vm/4c2f18ea-7bfe-45f1-b163-7ca4ba331620.png',
      'https://curefoods-images.eatfit.in/tr:w-622,ar-480:200//image/vm/1897a34b-5a66-474c-a695-2b19c0895a0f.png',
      'https://curefoods-images.eatfit.in/tr:w-622,ar-480:200//image/vm/6b5243ce-7467-4974-aca8-7bbb2167af60.png',
      "https://curefoods-images.eatfit.in/tr:w-622,ar-480:200//image/vm/4563a863-ead0-4fef-a590-0399c46aa074.png",
      'https://curefoods-images.eatfit.in/tr:w-622,ar-480:200//image/vm/4c2f18ea-7bfe-45f1-b163-7ca4ba331620.png',
      'https://curefoods-images.eatfit.in/tr:w-622,ar-480:200//image/vm/1897a34b-5a66-474c-a695-2b19c0895a0f.png',
      'https://curefoods-images.eatfit.in/tr:w-622,ar-480:200//image/vm/6b5243ce-7467-4974-aca8-7bbb2167af60.png'
      
    ];
  
    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
          );
        }, 3000); 
    
        return () => clearInterval(interval);
      }, [images.length]);


      // used inline styling to style sliding images----
      const imageContainerStyle = {
        width: '100%',
        height: '300px',
        overflow: 'hidden',
      };
    
      const imageStyle = {
        width: `${(2600 - 1 * (images.length - 1)) / images.length}px`, 
        height: '150px',
        objectFit: 'cover',
        marginRight: '20px', 
      };
    
  return (
    <div style={imageContainerStyle} >
      <div
        style={{
          display: 'flex',
          transition: 'transform 0.5s ease-in-out',
          transform: `translateX(-${currentImageIndex * ((500 + 20) / images.length)}px)`, 
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            style={imageStyle}
          />
        ))}
      </div>
    </div>
  )
}

export default Slider
