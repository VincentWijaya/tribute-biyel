import { useState, useEffect } from 'react'
import ProgressiveImage from 'react-progressive-graceful-image'
import moment from 'moment'

import '../stylesheets/countdown.css'

function Countdown () {
  let [countdown, setCountDown] = useState({
    days: 0,
    hours: '00',
    minutes: '00',
    seconds: '00',
  })
  const dayString = countdown.days > 1 ? 'days' : 'day'

  useEffect(() => {
    setInterval(() => {
      let eventDate = window.env.RELEASE_DATE
      let difference = eventDate - +new Date()

      if (difference < 1) {
        window.location.reload()
      } else {
        let days = Math.floor(difference / (1000 * 60 * 60 * 24))
        let hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
        let minutes = Math.floor((difference / (1000 * 60)) % 60)
        let seconds = Math.floor((difference / (1000)) % 60)

        setCountDown({
          hours: hours > 9 ? hours : `0${hours}`,
          minutes: minutes > 9 ? minutes : `0${minutes}`,
          seconds: seconds > 9 ? seconds : `0${seconds}`,
          days
        })
      }
    }, 1000)
  }, [])

  return (
      <ProgressiveImage
        delay={1000}
        src={`${process.env.PUBLIC_URL}/images/logo.png`}
        placeholder={`${process.env.PUBLIC_URL}/images/logo-lowres.jpg`}
      >
        {(src, loading) => (
        <div className='container' style={{ opacity: loading ? 0.5 : 1 }}>
          <h1>Thank you for the memories Gabriel Angelina</h1>
          <img src={src} alt='' />
          <div>
            <ul>
              <li><span>{countdown.days}</span>{dayString}</li>
              <li><span>{countdown.hours}</span>Hours</li>
              <li><span>{countdown.minutes}</span>Minutes</li>
              <li><span>{countdown.seconds}</span>Seconds</li>
            </ul>
            <p>Counting down to {moment.unix(window.env.RELEASE_DATE.slice(0, -3)).format('dddd, MMMM Do, YYYY | h:mm A')}</p>
          </div>
        </div>
        )}
      </ProgressiveImage>
  )
}

export default Countdown