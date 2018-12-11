import React, { Component } from 'react';


// import Todo from './Todo';
import Header from './components/Header/Header'
import CardList from './components/Cards/CardList';
import Footer from './components/Footer/Footer';
import SliderDynamique from './components/Slide/Slide';

import { BrowserRouter as Router, Route } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        
          <Route path="/he" component={Header} />
          <Header/>
          <SliderDynamique/>
          <CardList/>
          <Footer/> 
          
      </div>
      </Router>
    );
  }
}

export default App;
