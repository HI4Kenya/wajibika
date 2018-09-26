import React, { Component } from 'react';
import {
  StackNavigator,
} from 'react-navigation';
import { Root } from "native-base";
import { Font, AppLoading } from "expo";
// import { Provider } from 'react-redux';
import Routes from './src/Routes';
import Logscreen from './src/screens/Logscreen'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
      
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return (
        <Root>
          <AppLoading />
        </Root>
      );
    }
    return (
      <Root>
        <Routes />
      </Root>
    );
    /**
     * Routes tag
     * 
     * Defines all screens in the main 'Stack'
     */
  }
}
