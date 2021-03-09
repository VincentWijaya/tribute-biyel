import React from 'react'
import ProgressiveImage from 'react-progressive-graceful-image'

import './Image.css'

const Image = ({ images }) => {
  const result = []

  images.forEach(image => {
    result.push(
      <ProgressiveImage
        delay={5000}
        src={image.src}
        placeholder={image.lowResSrc}
        key={`${image.key}`}
      >
        { (src, loading) => (
          <img style={{ opacity: loading ? 0.5 : 1 }} src={src} alt={image.alt} key={`${image.key}`} className={image.className} />
          )
        }
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