import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'

import './Photobook.css'
import ScrollToTop from '../components/ScrollToTop'

function Photobook() {
  const images = []
  for (let i = 1; i <= window.env.PAGE_SIZE; i++) {
    images.push(
      <img src={`${process.env.PUBLIC_URL}/images/${i}.jpg`} className='bgimage' alt='' key={i}/>
    )
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <ScrollToTop showBelow={window.innerHeight * 5} />
        {images}
      </Container>
    </React.Fragment>
  )
}

export default Photobook