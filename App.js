import React from 'react';
import { Component } from "react";
import { StyleSheet, Text, View } from 'react-native';

import LoginScreen from './src/pages/login/login.js'

export default class App extends Component {
  render() {
    return (
      <LoginScreen />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});