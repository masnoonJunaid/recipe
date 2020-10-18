import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar'

function App() {
  return (
    <div >
      <Switch>
        <Route exact path="/" component={Navbar}>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
