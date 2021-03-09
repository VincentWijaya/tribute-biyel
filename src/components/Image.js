import React from 'react'
import ProgressiveImage from 'react-progressive-graceful-image'

import './Image.css'

const Image = ({ images }) => {
  const result = []

  images.forEach(image => {
    result.push(
      <ProgressiveImage
        src={image.src}
        placeholder={image.lowResSrc}
      >
        {src => <img src={src} alt={image.alt} key={image.key} className={image.className} />}
      </ProgressiveImage>
    )
  })

  return(
    <div>
      {result}
    </div>
  )
}

export default Image