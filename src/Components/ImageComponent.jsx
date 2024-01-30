// ImageComponent.jsx
import React from 'react';

const ImageComponent = ({ imageUrl, imageName }) => {
  return (
    <div className='imagecomp'>
      <img src={imageUrl} alt={imageName} />
      <h4>{imageName}</h4>
    </div>
  );
};

export default ImageComponent;
