import { Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' />
        </Switch>
      </Router>
    </>
  )
}

export default App
