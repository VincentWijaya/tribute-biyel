import { Route, Switch, BrowserRouter as Router} from 'react-router-dom'

// import Navbar from './components/Navbar'

import Photobook from './pages/Photobook'

function App() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Switch>
          <Route path='/' component={Photobook} />
          {/* <Route path='/photobook' /> */}
        </Switch>
      </Router>
    </>
  )
}

export default App
