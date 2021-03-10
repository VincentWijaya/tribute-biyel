import { Route, Switch, BrowserRouter as Router} from 'react-router-dom'

import Photobook from './pages/Photobook'

import './stylesheets/App.css'

function App() {
  return (
    <>
      <style>{'body { background-color: black; }'}</style>
      <Router>
        <Switch>
          <Route path='/' component={ Photobook }
          />
        </Switch>
      </Router>
      <footer>Created with ❤️ by <a href='https://instagram.com/vincwijaya' target='_blank' rel='noopener noreferrer'>Vincent Wijaya</a> &copy; {new Date().getFullYear()}</footer>
    </>
  )
}

export default App
