import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div onClick={this.props.onClick}> Clicked {this.props.clicks} number of times</div>
    );
  }
}

export default App;
