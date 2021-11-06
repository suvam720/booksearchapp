import React, { Component } from 'react'
import Header from './header';
import  Books from './books';

import './App.css';

class App extends Component {
  render(){
  return (
    <div className="App">
      <Header/>
      <Books/>
    </div>
  );
}
} 

export default App;
