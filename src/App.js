import { Route, Switch, BrowserRouter as Router} from 'react-router-dom'

import Photobook from './pages/Photobook'

function App() {
  return (
    <>
      <style>{'body { background-color: black; }'}</style>
      <Router>
        <Switch>
          <Route path='/' component={Photobook} />
        </Switch>
      </Router>
    </>
  )
}

export default App
