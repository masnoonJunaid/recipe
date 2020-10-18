import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar'
import Homepage from './components/Homepage'

function App() {
  return (
    <div >
      <Switch>
        <Route exact path="/" component={Navbar}>
        </Route>
      </Switch>
      <br/>
      <br/>
      <br/>
      <br/>
      <Homepage/>
    </div>
  );
}

export default App;
