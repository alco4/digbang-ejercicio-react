import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import CreditComponent from './components/CreditComponent';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <CreditComponent title="Simulá tu crédito" />;
  }
}

export default hot(module)(App);
