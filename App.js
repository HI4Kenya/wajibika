import React, { Component } from 'react';
import {
  StackNavigator,
} from 'react-navigation';
// import { Provider } from 'react-redux';
import Routes from './src/Routes';
import Logscreen from './src/screens/Logscreen'
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
