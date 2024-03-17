import {BrowserRouter,Route,Switch} from 'react-router-dom'
import UserDetails from './components/UserDetails'
import Game from './components/Game'
import './App.css';

function App() {

  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={UserDetails} />
      <Route exact path="/game" component={Game} />
    </Switch>
    </BrowserRouter>
  )
}

export default App;
