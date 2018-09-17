import React, { Component } from 'react';
// import { Provider } from 'react-redux';
import Routes from './src/Routes';

export default class App extends Component {

  render() {
    /**
     * Routes tag
     * 
     * Defines all screens in the main 'Stack'
     */
    return <Routes />
  }
}
