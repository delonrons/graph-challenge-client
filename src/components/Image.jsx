import * as React from 'react';
import classNames from 'classnames';

const Image = ({altText, type, src}) => {

  const imageClasses = classNames('absolute inset-0 object-cover', {
    'w-full h-full': type === 'full-width'
  });

  return (
    <img src={src} alt={altText} className={imageClasses}/>
  )
};

export default Image;