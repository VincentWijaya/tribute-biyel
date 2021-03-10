import { useState, useEffect } from 'react'

function Countdown () {
  let [countdown, setCountDown] = useState({
    days: 0,
    hours: '00',
    minutes: '00',
    seconds: '00',
    timeUp: false,
  })
  const dayString = countdown.days > 1 ? 'days' : 'day'

  useEffect(() => {
    setInterval(() => {
      let eventDate = window.env.RELEASE_DATE
      let difference = eventDate - +new Date()

      if (difference < 1) {
        setCountDown.timeUp = true
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
    //TODO Render photobook if timeup = true
    <p style={{color: 'white'}}>{`${countdown.days} ${dayString} ${countdown.hours} hours ${countdown.minutes}  minutes ${countdown.seconds} seconds`}</p>
  )
}

export default Countdown