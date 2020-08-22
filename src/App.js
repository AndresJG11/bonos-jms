import React from 'react';
import './App.css';
import { Tabla } from './components/Tabla'
import { BrowserRouter as Router, Switch, Route, HashRouter } from 'react-router-dom';
import { Usuario } from './components/Usuario';

function App() {
  
  console.log("This is the process.env", process.env.PUBLIC_URL)
  return (
      <div className="App">
        <Router basename={`${process.env.PUBLIC_URL}/`} >
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
  );
}

export default App;
