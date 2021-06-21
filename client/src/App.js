
import './App.css';

import {
  BrowserRouter as Router, 
  Switch,
  Route, 
  Redirect
} from "react-router-dom";
import { createBrowserHistory } from 'history';

import Main from './views/Main'
import Detail from './views/Detail'

function App() {
  
  const history = createBrowserHistory();

  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route exact path="/products">
            <Main/>
          </Route>
          <Route exact path="/products/:id">
            <Detail/>
          </Route>
          {/* <Route path="/">
            <Redirect to="/products"/>
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
