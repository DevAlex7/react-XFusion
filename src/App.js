import React from 'react';

import {
    BrowserRouter as Router, 
    Switch, 
    Route
} from 'react-router-dom'

//components 
import Home from './pages/home'
import Videogames from './pages/videogames'
import Feed from './pages/feed'

function App() {
  return (
    <Router>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/feed" component={Feed}/>
            <Route exact path="/videogames" component={Videogames}/>
        </Switch>
    </Router>
  );
}

export default App;

