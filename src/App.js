import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar'
import Homepage from './components/Homepage'
import Footer from './components/Footer'
import RecipeDetails from './components/RecipeDetails'

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Switch>
        <Route exact path = "/" component={Homepage}/>
      </Switch>
      <Route path="/details" component={RecipeDetails}/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
