import React, { Component } from 'react';
import Expo from 'expo';
import { Provider } from 'react-redux';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './src/screens/HomeScreen.js'

const NavigationApp = StackNavigator(
  {
    Home: { screen: HomeScreen },
  },
  {
    navigationOptions: {
      headerStyle: {
        marginTop: Expo.Constants.statusBarHeight
      }
    }
  }
)

export default class App extends Component {

  render() {

    return (
      <Provider store={{}}>
        <NavigationApp />
      </Provider>
    );
  }
}