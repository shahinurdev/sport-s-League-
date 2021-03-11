import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home';
import LeagueDetail from './Components/LeagueDetail/LeagueDetail';
import NoMatch from './Components/NoMatch/NoMatch';

function App() {
  return (
    <>
      <Router>
      <div>
        <Switch>
          <Route path="/home">
           <Home></Home>
          </Route>
          <Route path="/league/:idLeague">
            <LeagueDetail></LeagueDetail>
          </Route>
          <Route exact path="/">
        <Home></Home>
      </Route>
      <Route path="*">
        <NoMatch></NoMatch>
      </Route>
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
