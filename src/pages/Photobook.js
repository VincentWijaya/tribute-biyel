import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'

import ScrollToTop from '../components/ScrollToTop'
import Image from '../components/Image'

function Photobook() {
  const images = []
  for (let i = 1; i <= window.env.PAGE_SIZE; i++) {
    images.push(
      {
        src: `${process.env.PUBLIC_URL}/images/${i}.jpg`,
        key: i,
        alt: '',
        className: 'bgimage',
        lowResSrc: `${process.env.PUBLIC_URL}/images/lowres.jpg`,
      }
    )
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <ScrollToTop showBelow={window.innerHeight * 5} />
        <Image images={images}/>
      </Container>
    </React.Fragment>
  )
}

export default Photobook