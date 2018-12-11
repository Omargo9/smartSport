import React, { Component } from 'react';
import {BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import Inscription from './components/Inscription/Inscription';
import App from './App';

function Routers(){

return(
    <Router>
    <Switch>
  <div className="App">
   
    
    <Route path="/" exact  component={App} />
    <Route path="/inscription" exact  component={Inscription} />


     
  </div>
  </Switch>
  </Router>

)

}

export default Routers;



