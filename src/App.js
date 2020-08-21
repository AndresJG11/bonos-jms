import React from 'react';
import './App.css';
import { Tabla } from './components/Tabla'
import { BrowserRouter as Router, Switch, Route, HashRouter } from 'react-router-dom';
import { Usuario } from './components/Usuario';

function App() {

  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <Tabla />
            </Route>
            <Route path="/usuario/:id">
              <Usuario />
            </Route>
          </Switch>
        </Router>
      </div>
    </HashRouter>

  );
}

export default App;
