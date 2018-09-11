<<<<<<< HEAD
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
=======
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container } from 'native-base';
import { Font, Apploading } from 'expo';

import { AccordionExample, HeaderIconExample, Save } from './src/pages/euv/euv';

export default class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = { loading: true }
  }

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf')
    })
    this.setState({ loading: false })
  }
  render() {
    if (this.state.loading) {
      return (
        null
      );
    }

    return (
      <Container>
        <HeaderIconExample />
        <AccordionExample />
        <Save />
        
      </Container>
      
>>>>>>> e78839e936eabd843fc6163861ef49b19c1d0309
    );
  }
}