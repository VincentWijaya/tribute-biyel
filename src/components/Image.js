import React from 'react'
import { LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component'

import './Image.css'

const Gallery = ({ images, scrollPosition }) => (
  <div>
    {images.map((image) =>
      <LazyLoadImage
        key={image.key}
        alt={image.alt}
        effect='blur'
        scrollPosition={scrollPosition}
        src={image.src}
        className={image.className}/>
    )}
  </div>
)

export default trackWindowScroll(Gallery);