import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import IconButton from '@material-ui/core/IconButton'
import GetAppIcon from '@material-ui/icons/GetApp'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  toTop: {
    zIndex: 2,
    position: 'fixed',
    bottom: '2vh',
    backgroundColor: '#DCDCDC',
    color: 'black',
    "&:hover, &.Mui-focusVisible": {
      transition: '0.3s',
      color: '#397BA6',
      backgroundColor: '#DCDCDC'
    },
    [theme.breakpoints.up('xs')]: {
      right: '5%',
      backgroundColor: 'rgb(220,220,220,0.7)',
    },
    [theme.breakpoints.up('lg')]: {
      right: '6.5%',
    },
  },
  downloadPdf: {
    zIndex: 3,
    position: 'fixed',
    bottom: '2vh',
    backgroundColor: '#DCDCDC',
    color: 'black',
    "&:hover, &.Mui-focusVisible": {
      transition: '0.3s',
      color: '#397BA6',
      backgroundColor: '#DCDCDC'
    },
    [theme.breakpoints.up('xs')]: {
      right: '20%',
      backgroundColor: 'rgb(220,220,220,0.7)',
    },
    [theme.breakpoints.up('lg')]: {
      right: '11%',
    },
  }
})
)

const Scroll = ({
  showBelow,
}) => {

  const classes = useStyles();

  const [show, setShow] = useState(showBelow ? false : true)

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true)
    } else {
      if (show) setShow(false)
    }
  }

  const handleToTop = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` })
  }

  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleScroll)
      return () => window.removeEventListener(`scroll`, handleScroll)
    }
  })

  const icons = () => {
    return (
      <div className={classes.root}>
        <IconButton onClick={handleToTop} className={classes.toTop} aria-label="to top">
          <ExpandLessIcon />
        </IconButton>
        <IconButton className={classes.downloadPdf} aria-label="download">
          <GetAppIcon />
        </IconButton>
      </div>
    )
  }

  return (
    <div>
      {
        show && icons()
      }
    </div>
  )
}
export default Scroll